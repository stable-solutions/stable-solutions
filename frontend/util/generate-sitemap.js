import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
    const urls = [
        { loc: '/', changefreq: 'daily', priority: 1.0 },
        { loc: '/about-us', changefreq: 'monthly', priority: 0.8 },
        { loc: '/contact-us', changefreq: 'monthly', priority: 0.8 },
        { loc: '/portfolio', changefreq: 'weekly', priority: 0.9 },
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (url) => `
  <url>
    <loc>https://stablesolutions.pro${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

    // Resolve the path to the public/ directory relative to the util/ folder
    const outputDir = path.resolve(__dirname, '../public');
    const outputPath = path.join(outputDir, 'sitemap.xml');

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, sitemapContent, 'utf8');
    console.log(`Sitemap written to ${outputPath}`);
};

generateSitemap();
