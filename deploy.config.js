module.exports = {
  // S3 Configuration
  s3: {
    bucket: 'www.bjarni-gunnarsson.net', // Replace with your actual S3 bucket name
    region: 'eu-central-1' // Replace with your S3 bucket region
  },
  
  // CloudFront Configuration
  cloudfront: {
    distributionId: 'E2UKM3P46QL7H8' // Replace with your CloudFront distribution ID
  },
  
  // Build Configuration
  build: {
    sourceMap: false, // Set to true if you want source maps in production
    analyze: false // Set to true to analyze bundle size after build
  }
}; 