/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://estioffice.co.il",
  generateRobotsTxt: true,
  exclude: ["/process"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/services"),
    await config.transform(config, "/about"),
    await config.transform(config, "/how-it-works"),
    await config.transform(config, "/contact"),
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    host: "https://estioffice.co.il",
  },
};
