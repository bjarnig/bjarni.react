#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Advanced Deployment Script${NC}"
echo -e "${BLUE}==========================${NC}"

# Check if Node.js is available to read config
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is required but not installed${NC}"
    exit 1
fi

# Read configuration from deploy.config.js
echo -e "${YELLOW}📋 Reading configuration...${NC}"
CONFIG=$(node -e "
const config = require('./deploy.config.js');
console.log(JSON.stringify(config));
")

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to read configuration file${NC}"
    exit 1
fi

# Extract values from config
S3_BUCKET=$(echo $CONFIG | node -e "console.log(JSON.parse(require('fs').readFileSync(0)).s3.bucket)")
CLOUDFRONT_DISTRIBUTION_ID=$(echo $CONFIG | node -e "console.log(JSON.parse(require('fs').readFileSync(0)).cloudfront.distributionId)")
S3_REGION=$(echo $CONFIG | node -e "console.log(JSON.parse(require('fs').readFileSync(0)).s3.region)")

# Validate configuration
if [ "$S3_BUCKET" = "your-bucket-name" ] || [ "$CLOUDFRONT_DISTRIBUTION_ID" = "your-distribution-id" ]; then
    echo -e "${RED}❌ Please update deploy.config.js with your actual values${NC}"
    echo -e "${YELLOW}   - S3_BUCKET: $S3_BUCKET${NC}"
    echo -e "${YELLOW}   - CLOUDFRONT_DISTRIBUTION_ID: $CLOUDFRONT_DISTRIBUTION_ID${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Configuration loaded:${NC}"
echo -e "${BLUE}   S3 Bucket: $S3_BUCKET${NC}"
echo -e "${BLUE}   CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID${NC}"
echo -e "${BLUE}   S3 Region: $S3_REGION${NC}"

# Step 1: Build (skip if dist/ was already built by the caller)
if [ "${SKIP_BUILD:-}" != "1" ]; then
    echo -e "${YELLOW}📦 Building application...${NC}"
    npm run export

    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Build failed!${NC}"
        exit 1
    fi

    echo -e "${GREEN}✅ Build completed successfully${NC}"
fi

# Step 2: Sync to S3
echo -e "${YELLOW}☁️  Syncing to S3...${NC}"
aws s3 sync dist/ s3://$S3_BUCKET --delete --region $S3_REGION

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ S3 sync failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ S3 sync completed successfully${NC}"

# Step 2b: Upload prerendered routes to no-extension keys.
#
# Why: CloudFront has 403/404 → /index.html SPA fallback. A direct request
# to /about hits S3, finds no object named "about" (only "about/index.html"),
# returns 404, and CloudFront serves the homepage shell — defeating the
# prerender. Putting the same prerendered HTML at key "about" (no extension,
# Content-Type text/html) makes /about resolve to the prerendered file
# directly, so crawlers and humans get per-route content.
echo -e "${YELLOW}🪞  Mirroring prerendered routes to extensionless keys...${NC}"
PRERENDERED_ROUTES=()
for d in dist/*/; do
  route="${d#dist/}"
  route="${route%/}"
  if [ -f "dist/$route/index.html" ] && [ "$route" != "assets" ]; then
    PRERENDERED_ROUTES+=("$route")
  fi
done

for route in "${PRERENDERED_ROUTES[@]}"; do
  aws s3 cp "dist/$route/index.html" "s3://$S3_BUCKET/$route" \
    --content-type "text/html; charset=utf-8" \
    --region "$S3_REGION" \
    --only-show-errors
  echo -e "${BLUE}   /$route → s3://$S3_BUCKET/$route${NC}"
done

echo -e "${GREEN}✅ Mirrored ${#PRERENDERED_ROUTES[@]} prerendered route(s)${NC}"

# Step 3: Invalidate CloudFront cache
echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ CloudFront invalidation failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ CloudFront invalidation created: $INVALIDATION_ID${NC}"

# Step 4: Wait for invalidation to complete
echo -e "${YELLOW}⏳ Waiting for invalidation to complete...${NC}"
aws cloudfront wait invalidation-completed \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --id $INVALIDATION_ID

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Invalidation may still be in progress${NC}"
else
    echo -e "${GREEN}✅ Invalidation completed!${NC}"
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${BLUE}   Your changes should now be live on your website.${NC}" 