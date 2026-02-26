# S3 Static Website Deployment Guide

This guide explains how to deploy your React app as a static website on AWS S3 with SEO optimization and Google Analytics.

## Prerequisites

1. **AWS CLI** installed and configured
2. **Node.js** and **npm** installed
3. **AWS S3 bucket** created and configured for static website hosting
4. **Google Analytics** account (optional but recommended)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Replace `GA_MEASUREMENT_ID` in `public/index.html` with your actual Measurement ID

### 3. Configure S3 Bucket

1. Create an S3 bucket with your domain name
2. Enable static website hosting
3. Set the index document to `index.html`
4. Set the error document to `index.html` (for React Router)
5. Configure bucket policy for public read access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

### 4. Configure CloudFront (Recommended)

1. Create a CloudFront distribution
2. Set the origin to your S3 bucket
3. Configure custom error pages:
   - 403 → `/index.html` (200)
   - 404 → `/index.html` (200)
4. Enable compression
5. Set up your custom domain (optional)

### 5. Update Configuration

1. Update `deploy-s3.sh` with your actual values:
   - `BUCKET_NAME`: Your S3 bucket name
   - `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID
   - `REGION`: Your AWS region

2. Update `src/utils/sitemapGenerator.js` with your actual domain

3. Update `public/robots.txt` with your actual domain

### 6. Deploy

```bash
# Make the deployment script executable
chmod +x deploy-s3.sh

# Run deployment
./deploy-s3.sh
```

Or use npm scripts:

```bash
npm run deploy
```

## SEO Features

This setup includes:

- **Static pre-rendering** with react-snap
- **Sitemap generation** for search engines
- **Robots.txt** for crawler guidance
- **Meta tags** for social sharing
- **Canonical URLs** to prevent duplicate content
- **Google Analytics** tracking

## File Structure

```
├── public/
│   ├── index.html          # Main HTML template with meta tags
│   ├── robots.txt          # Search engine crawler instructions
│   └── sitemap.xml         # Auto-generated sitemap
├── src/
│   └── utils/
│       └── sitemapGenerator.js  # Sitemap generation utility
├── deploy-s3.sh            # Deployment script
├── package.json            # Build scripts and dependencies
└── DEPLOYMENT.md           # This file
```

## Build Scripts

- `npm run build`: Standard React build
- `npm run export`: Build + static pre-rendering
- `npm run generate-sitemap`: Generate sitemap.xml
- `npm run build-with-sitemap`: Build with sitemap generation
- `npm run deploy`: Full deployment to S3

## Troubleshooting

### Common Issues

1. **404 errors on direct navigation**: Ensure S3 bucket is configured for static website hosting with error document set to `index.html`

2. **CloudFront cache issues**: The deployment script automatically invalidates CloudFront cache

3. **SEO not working**: Ensure react-snap is properly configured in package.json

4. **Google Analytics not tracking**: Verify the Measurement ID is correctly set in index.html

### Performance Optimization

1. **Enable CloudFront compression**
2. **Set appropriate cache headers**
3. **Optimize images and assets**
4. **Use CloudFront edge locations**

## Alternative: Next.js Migration

If you want to migrate to Next.js for better SEO:

1. Install Next.js: `npm install next react react-dom`
2. Convert components to use Next.js routing
3. Add `getStaticProps` for data fetching
4. Use Next.js Image component for optimization
5. Deploy to Vercel or export as static files

## Monitoring

- **Google Analytics**: Track user behavior and performance
- **AWS CloudWatch**: Monitor S3 and CloudFront metrics
- **Google Search Console**: Monitor search performance and indexing

## Security

- **HTTPS**: Always use HTTPS in production
- **CSP Headers**: Consider adding Content Security Policy headers
- **Bucket Permissions**: Ensure minimal required permissions 