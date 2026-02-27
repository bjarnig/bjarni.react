#!/bin/bash

echo "🚀 Starting deployment process..."

# Set AWS profile
export AWS_PROFILE=bg

# Build the project with sitemap
echo "📦 Building project with sitemap..."
npm run build-with-sitemap

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful! Deploying..."
    SKIP_BUILD=1 ./deploy-advanced.sh
else
    echo "❌ Build failed! Deployment aborted."
    exit 1
fi

echo "🎉 Deployment complete!" 