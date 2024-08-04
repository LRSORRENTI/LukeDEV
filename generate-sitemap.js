// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// This allows us to use __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/how-it-works', changefreq: 'weekly', priority: 0.8 },
    { url: '/pricing', changefreq: 'weekly', priority: 0.8 },
    { url: '/roadmap', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add more paths as needed
];

(async () => {
    const sitemap = new SitemapStream({ hostname: 'https://lukedevs.com' });

    links.forEach(link => sitemap.write(link));

    sitemap.end();

    const sitemapOutput = path.join(__dirname, 'dist', 'sitemap.xml');
    streamToPromise(sitemap)
        .then(data => {
            createWriteStream(sitemapOutput).write(data);
            console.log(`Sitemap generated at ${sitemapOutput}`);
        })
        .catch(err => console.error('Error generating sitemap:', err));
})();
