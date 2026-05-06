#!/bin/bash

set -e

echo "🚀 Starting deployment process..."

# Set AWS profile
export AWS_PROFILE=bg

# Build the project (sitemap + vite build + prerender to static HTML per route)
echo "📦 Building project (sitemap + vite + prerender)..."
npm run build-with-sitemap

# Sanity check: prerendered HTML for a deep route must exist.
# If this fails, S3 will serve only the SPA shell and SEO will regress.
REQUIRED_ROUTES=(about music releases courses works)
for route in "${REQUIRED_ROUTES[@]}"; do
  if [ ! -f "dist/$route/index.html" ]; then
    echo "❌ Prerender output missing: dist/$route/index.html"
    echo "   Aborting deploy to avoid pushing a broken build."
    exit 1
  fi
done
echo "✅ Prerendered HTML present for all required routes"

echo "✅ Build successful! Deploying..."
SKIP_BUILD=1 ./deploy-advanced.sh

echo "🎉 Deployment complete!"
