/** @type {import('next-sitemap').IConfig} */
const fs = require("node:fs");
const path = require("node:path");

// Read blog post slugs from content/posts directory
function getBlogSlugs() {
  const postsDir = path.join(process.cwd(), "content/posts");
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

module.exports = {
  siteUrl: "https://estioffice.co.il",
  generateRobotsTxt: true,
  exclude: ["/process"],
  additionalPaths: async (config) => {
    const staticPages = [
      "/",
      "/services",
      "/about",
      "/how-it-works",
      "/contact",
      "/blog",
    ];

    const blogSlugs = getBlogSlugs();
    const blogPages = blogSlugs.map((slug) => `/blog/${slug}`);

    const allPaths = [...staticPages, ...blogPages];

    return Promise.all(
      allPaths.map((p) => config.transform(config, p))
    );
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
    ],
    host: "https://estioffice.co.il",
    additionalSitemaps: [],
  },
};
