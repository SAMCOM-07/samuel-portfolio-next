/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://samuel.mevads.dev",

  generateRobotsTxt: true,

  generateIndexSitemap: true,

  sitemapSize: 5000,

  changefreq: "weekly",

  priority: 0.7,

  autoLastmod: true,

  exclude: ["/404", "/500", "/api/*"],

  robotsTxtOptions: {
    additionalSitemaps: ["https://samuel.mevads.dev/sitemap.xml"],
  },
};
