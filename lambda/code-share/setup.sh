#!/bin/bash
# One-time setup of the /share backend: a bucket, a role, and a Lambda behind a public function URL.
set -euo pipefail
export AWS_PROFILE=bg
REGION=eu-central-1
BUCKET=bjarni-code-share
FN=code-share
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
WRITE_KEY=$(openssl rand -hex 16)
cd "$(dirname "$0")"

aws s3api create-bucket --bucket $BUCKET --region $REGION \
  --create-bucket-configuration LocationConstraint=$REGION

aws iam create-role --role-name $FN-lambda --assume-role-policy-document \
  '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'
aws iam attach-role-policy --role-name $FN-lambda \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
aws iam put-role-policy --role-name $FN-lambda --policy-name rooms --policy-document \
  "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":[\"s3:GetObject\",\"s3:PutObject\"],\"Resource\":\"arn:aws:s3:::$BUCKET/rooms/*\"},{\"Effect\":\"Allow\",\"Action\":\"s3:ListBucket\",\"Resource\":\"arn:aws:s3:::$BUCKET\"}]}"
sleep 10  # new IAM roles take a moment before Lambda accepts them

zip -q function.zip index.mjs
aws lambda create-function --function-name $FN --region $REGION \
  --runtime nodejs22.x --handler index.handler --zip-file fileb://function.zip \
  --role arn:aws:iam::$ACCOUNT:role/$FN-lambda --memory-size 128 --timeout 5 \
  --environment "Variables={BUCKET=$BUCKET,WRITE_KEY=$WRITE_KEY}"
rm function.zip
aws lambda wait function-active --function-name $FN --region $REGION

URL=$(aws lambda create-function-url-config --function-name $FN --region $REGION --auth-type NONE \
  --cors '{"AllowOrigins":["https://bjarni-gunnarsson.net","http://localhost:5173"],"AllowMethods":["GET","PUT"],"AllowHeaders":["content-type","x-key"],"MaxAge":3600}' \
  --query FunctionUrl --output text)
aws lambda add-permission --function-name $FN --region $REGION --statement-id url \
  --action lambda:InvokeFunctionUrl --principal '*' --function-url-auth-type NONE
aws lambda add-permission --function-name $FN --region $REGION --statement-id invoke \
  --action lambda:InvokeFunction --principal '*' --invoked-via-function-url

echo
echo "Function URL: $URL"
echo "Teacher link (open once, keep private): https://bjarni-gunnarsson.net/share/cwa?key=$WRITE_KEY"
