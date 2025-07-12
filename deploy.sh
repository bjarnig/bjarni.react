#!/bin/bash

# Configuration - Update these values
S3_BUCKET="your-bucket-name"
CLOUDFRONT_DISTRIBUTION_ID="your-cloudfront-distribution-id"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment...${NC}"

# Step 1: Build the application
echo -e "${YELLOW}📦 Building application...${NC}"
npm run export

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Step 2: Sync to S3
echo -e "${YELLOW}☁️  Syncing to S3...${NC}"
aws s3 sync build/ s3://$S3_BUCKET --delete

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ S3 sync failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ S3 sync completed successfully${NC}"

# Step 3: Invalidate CloudFront cache
echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ CloudFront invalidation failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ CloudFront invalidation completed successfully${NC}"
echo -e "${GREEN}🎉 Deployment completed! Your changes should be live in a few minutes.${NC}" 