# Bjarni Gunnarsson - Portfolio Website

A modern React-based portfolio website showcasing algorithmic composition, computer music, and educational content.

## About

This is the personal portfolio website of Bjarni Gunnarsson, featuring:
- **Algorithmic Composition & Computer Music** works and projects
- **Educational Courses** in programming and music technology
- **Interactive Music** and live performance documentation
- **Research & Writings** on electronic music and technology
- **Current & Past Projects** with detailed documentation

## Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with Bootstrap integration
- **SEO Optimized** - Complete meta tags, structured data, and sitemap generation
- **Performance Optimized** - Code splitting, lazy loading, and bundle optimization
- **Static Site Generation** - Pre-rendered pages for fast loading and SEO
- **Google Analytics** - Comprehensive tracking and analytics
- **Date-based Content** - Automatic content visibility based on scheduled dates

### Educational Content
- **Programming and Music Courses** (PMA, PMB, CWA)
- **Algorithmic Composition Workshops**
- **Interactive Learning Materials** with downloadable resources
- **Course Materials** with automatic release scheduling

### Music & Art Sections
- **Live Performances** documentation and recordings
- **Collaborative Works** with other artists and musicians
- **Code-based Compositions** and algorithmic music
- **Visual Art** and multimedia projects
- **Mix Collections** and audio excerpts

## Technology Stack

- **React 16.14.0** - Frontend framework
- **React Router 5.3.4** - Client-side routing
- **React Bootstrap 0.32.4** - UI components
- **React Helmet 6.1.0** - SEO and meta tag management
- **React Snap 1.23.0** - Static site generation
- **AWS S3** - Static website hosting
- **Google Analytics** - User tracking and analytics

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── FrontImage.js
│   │   ├── Login.js
│   │   └── OpacityImage.js
│   ├── courses/          # Educational content
│   │   ├── Courses.js    # Main courses page
│   │   ├── PMA.js        # Programming and Music 1
│   │   ├── PMB.js        # Programming and Music 2
│   │   ├── CWA.js        # Composing with Algorithms
│   │   └── Workshops.js  # Workshop content
│   ├── info/             # Information pages
│   │   ├── About.js
│   │   ├── Current.js
│   │   ├── Past.js
│   │   ├── Releases.js
│   │   └── Press.js
│   ├── music/            # Music-related content
│   │   ├── Music.js
│   │   ├── Live.js
│   │   ├── Collaborations.js
│   │   ├── Code.js
│   │   └── Visual.js
│   ├── GoogleAnalytics.js
│   ├── NavBar.js
│   └── StructuredData.js
├── assets/
│   ├── css/              # Stylesheets
│   └── images/           # Static images
├── utils/
│   └── sitemapGenerator.js
└── views/
    └── view.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- AWS CLI (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bjarni.react
   ```

2. **Install dependencies**
```bash
   npm install
   ```

3. **Configure environment**
   - Update Google Analytics ID in `src/components/GoogleAnalytics.js`
   - Configure AWS credentials for deployment

4. **Start development server**
```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build:analyze` - Build and analyze bundle size
- `npm test` - Run tests
- `npm run generate-sitemap` - Generate sitemap.xml
- `npm run build-with-sitemap` - Build with sitemap generation
- `npm run deploy` - Deploy to S3
- `npm run deploy:full` - Full deployment with all optimizations

## Key Features

### Date-based Content Visibility
The website includes intelligent content scheduling where course materials automatically become visible one day before their scheduled class date. This is implemented in the course components using a custom `shouldShowArticle` utility function.

### SEO Optimization
- **Meta Tags** - Comprehensive meta descriptions and keywords
- **Structured Data** - JSON-LD structured data for search engines
- **Sitemap Generation** - Automatic sitemap.xml creation
- **Open Graph** - Social media sharing optimization
- **Performance** - Optimized loading and Core Web Vitals

### Performance Features
- **Code Splitting** - Lazy loading of components
- **Bundle Optimization** - Minimized JavaScript and CSS
- **Static Generation** - Pre-rendered pages for fast loading
- **Resource Hints** - DNS prefetching for external resources
- **Deferred Analytics** - Non-blocking Google Analytics loading

## Deployment

### AWS S3 Deployment
The site is configured for deployment to AWS S3 with static website hosting:

1. **Configure AWS credentials**
```bash
   aws configure
```

2. **Build and deploy**
```bash
   npm run build-with-sitemap
   npm run deploy
   ```

3. **Advanced deployment** (with CloudFront)
```bash
   ./deploy-advanced.sh
   ```

### Deployment Features
- **Automatic S3 sync** with file deletion
- **CloudFront distribution** for global CDN
- **HTTPS enforcement** and security headers
- **Custom error pages** for SPA routing

## Analytics & SEO

### Google Analytics
- **GA4 Integration** - Modern analytics tracking
- **Event Tracking** - User interaction monitoring
- **Performance Monitoring** - Core Web Vitals tracking

### SEO Features
- **Dynamic Meta Tags** - Page-specific SEO optimization
- **Structured Data** - Rich snippets for search results
- **XML Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawling instructions

## Customization

### Adding New Content
1. **New Pages** - Add routes in `App.js` and create components
2. **Course Materials** - Use the date-based visibility system
3. **Styling** - Modify CSS files in `src/assets/css/`
4. **Images** - Add to `src/assets/images/` and reference in components

### Content Management
- **Course Scheduling** - Update dates in course components
- **SEO Updates** - Modify meta tags in individual components
- **Analytics** - Update tracking in `GoogleAnalytics.js`

## Documentation

- [Deployment Guide](DEPLOYMENT.md) - Detailed deployment instructions
- [SEO Setup](SEO_SETUP.md) - SEO configuration guide
- [Performance Optimization](PERFORMANCE_OPTIMIZATION.md) - Performance tuning guide

## Contributing

This is a personal portfolio website. For suggestions or issues, please contact Bjarni Gunnarsson directly.

## License

This project is for personal use.


---

*Built with React and deployed on AWS S3*
