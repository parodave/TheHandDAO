/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kr-thehand.com',
  generateRobotsTxt: false, // We have a custom robots.txt
  exclude: ['/api/*', '/admin/*'],
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.8,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/fr/' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};