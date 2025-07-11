// Sitemap generator for SEO
const generateSitemap = () => {
  const baseUrl = 'http://www.bjarni-gunnarsson.net';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/current', priority: '0.8', changefreq: 'weekly' },
    { path: '/music', priority: '0.8', changefreq: 'monthly' },
    { path: '/releases', priority: '0.7', changefreq: 'monthly' },
    { path: '/courses', priority: '0.6', changefreq: 'monthly' },
    { path: '/about', priority: '0.6', changefreq: 'monthly' },
    { path: '/works', priority: '0.7', changefreq: 'monthly' },
    { path: '/collaborations', priority: '0.5', changefreq: 'monthly' },
    { path: '/live', priority: '0.5', changefreq: 'monthly' },
    { path: '/mixes', priority: '0.5', changefreq: 'monthly' },
    { path: '/visual', priority: '0.5', changefreq: 'monthly' },
    { path: '/excerpts', priority: '0.5', changefreq: 'monthly' },
    { path: '/past', priority: '0.5', changefreq: 'monthly' },
    { path: '/code', priority: '0.4', changefreq: 'monthly' },
    { path: '/writings', priority: '0.4', changefreq: 'monthly' },
    { path: '/press', priority: '0.4', changefreq: 'monthly' },
    { path: '/works', priority: '0.4', changefreq: 'monthly' },
    { path: '/paths', priority: '0.4', changefreq: 'monthly' },
    { path: '/processes', priority: '0.4', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

const saveSitemap = () => {
  const sitemap = generateSitemap();
  
  // Create a blob and download it
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

module.exports = { generateSitemap, saveSitemap }; 