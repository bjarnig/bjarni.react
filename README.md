# Bjarni Gunnarsson

React-based portfolio site

## About

- **Algorithmic Composition & Computer Music** works and projects
- **Educational Courses** in programming and music technology
- **Interactive Music** and live performance documentation
- **Research & Writings** on electronic music and technology
- **Current & Past Projects** with detailed documentation

## Technology Stack

- **React 18** - Frontend framework (routes are code-split via `React.lazy`)
- **React Router 6** - Client-side routing
- **react-helmet-async** - Per-route SEO and meta tag management
- **Vite 7** - Build tool and dev server
- **Puppeteer** - Static prerendering of routes for crawlers
- **Bootstrap 3** - Vendored CSS classes (no npm dependency, no JS framework)
- **AWS S3 + CloudFront** - Hosting and CDN
- **Google Analytics 4** - User tracking

## Site Pages

Routes are defined in `src/App.js`. The primary navigation exposes
**current**, **works**, **releases**, **courses**, and **about**; the
remaining routes are linked from within those pages.

| Path | Page | Path | Page |
| --- | --- | --- | --- |
| `/` | Index (home) | `/code` | Code |
| `/current` | Current | `/writings` | Writings |
| `/past` | Past | `/visual` | Visual |
| `/music` | Works | `/excerpts` | Excerpts |
| `/works` | Works (detail) | `/mixes` | Mixes |
| `/releases` | Releases | `/live` | Live |
| `/collaborations` | Collaborations | `/press` | Press |
| `/paths` | Paths | `/processes` | Processes |
| `/about` | About | `/courses` | Courses |
| `/pma` | PMA course | `/pmb` | PMB course |
| `/cwa` | CWA course | `/workshops` | Workshops |

## Project Structure

```
src/
├── index.jsx             # App entry point
├── App.js                # Router, nav, and route definitions
├── components/
│   ├── common/           # Reusable components
│   │   ├── FrontImage.js
│   │   ├── OpacityImage.js
│   │   └── SEO.js        # Per-route Helmet meta tags
│   ├── courses/          # Educational content
│   │   ├── Courses.js
│   │   ├── CourseArticleList.js
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
├── data/
│   └── courses/          # Course article data (pma.json, pmb.json, cwa.json)
├── assets/
│   ├── css/              # Stylesheets (app, style, custom)
│   └── images/           # Local images
└── utils/
    ├── sitemapGenerator.js
    └── shouldShowArticle.js
scripts/
└── prerender.mjs         # Puppeteer prerender of routes to static HTML
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
- `npm run generate-sitemap` - Generate `public/sitemap.xml`
- `npm run prerender` - Prerender routes to static HTML (Puppeteer)
- `npm run build-with-sitemap` - Generate sitemap, build, then prerender
- `npm run deploy:advanced` - Deploy to S3 + invalidate CloudFront

## Deployment

```bash
./deploy-advanced.sh
```

Builds the site, syncs to S3, and invalidates the CloudFront cache.

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md)
- [SEO Setup](docs/SEO_SETUP.md)
- [SEO Enhancement Guide](docs/SEO_ENHANCEMENT_GUIDE.md)
- [Performance Optimization](docs/PERFORMANCE_OPTIMIZATION.md)

## License

This project is for personal use.
