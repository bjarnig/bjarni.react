# Bjarni Gunnarsson

React-based portfolio site

## About

- **Algorithmic Composition & Computer Music** works and projects
- **Educational Courses** in programming and music technology
- **Interactive Music** and live performance documentation
- **Research & Writings** on electronic music and technology
- **Current & Past Projects** with detailed documentation

## Technology Stack

- **React 18** - Frontend framework
- **React Router 6** - Client-side routing
- **React Helmet** - SEO and meta tag management
- **Vite 7** - Build tool and dev server
- **Bootstrap 3** - CSS styling (plain classes, no JS framework)
- **AWS S3 + CloudFront** - Hosting and CDN
- **Google Analytics 4** - User tracking

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── FrontImage.js
│   │   ├── FrontImageLarge.js
│   │   └── OpacityImage.js
│   ├── courses/          # Educational content
│   │   ├── Courses.js
│   │   ├── PMA.js
│   │   ├── PMB.js
│   │   ├── CWA.js
│   │   └── Workshops.js
│   ├── info/             # Information pages
│   │   ├── About.js
│   │   ├── Current.js
│   │   ├── Past.js
│   │   ├── Releases.js
│   │   ├── Press.js
│   │   ├── Works.js
│   │   ├── Paths.js
│   │   ├── Processes.js
│   │   ├── Lueur.js
│   │   └── Index.js
│   ├── music/            # Music-related content
│   │   ├── Music.js
│   │   ├── Live.js
│   │   ├── Collaborations.js
│   │   ├── Code.js
│   │   ├── Visual.js
│   │   ├── Writings.js
│   │   ├── Excerpts.js
│   │   └── Mixes.js
│   ├── GoogleAnalytics.js
│   └── StructuredData.js
├── assets/
│   └── css/              # Stylesheets
├── utils/
│   └── sitemapGenerator.js
docs/
├── DEPLOYMENT.md
├── SEO_SETUP.md
├── SEO_ENHANCEMENT_GUIDE.md
└── PERFORMANCE_OPTIMIZATION.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm
- AWS CLI (for deployment)

### Installation

```bash
git clone <repository-url>
cd bjarni.react
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (output in `dist/`)
- `npm run preview` - Preview production build locally
- `npm run generate-sitemap` - Generate sitemap.xml
- `npm run build-with-sitemap` - Build with sitemap generation
- `npm run deploy:advanced` - Deploy to S3 + invalidate CloudFront

## Deployment

```bash
./deploy-advanced.sh
```

Builds the site, syncs to S3, and invalidates the CloudFront cache.

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md)
- [SEO Setup](docs/SEO_SETUP.md)
- [Performance Optimization](docs/PERFORMANCE_OPTIMIZATION.md)

## License

This project is for personal use.
