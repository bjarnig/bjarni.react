#!/bin/bash

# S3 Static Website Deployment Script
# Replace these variables with your actual values

BUCKET_NAME="www.bjarni-gunnarsson.net"
CLOUDFRONT_DISTRIBUTION_ID="E2UKM3P46QL7H8"
REGION="eu-central-1"

echo "🚀 Starting deployment to S3..."

# Build the project
echo "📦 Building the project..."
npm run build

# Generate sitemap
echo "🗺️ Generating sitemap..."
npm run generate-sitemap

# Sync to S3
echo "📤 Syncing to S3 bucket: $BUCKET_NAME"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --region $REGION

# Invalidate CloudFront cache (if using CloudFront)
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*" \
        --region $REGION
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com" 