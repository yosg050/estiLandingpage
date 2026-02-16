/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/process",
        destination: "/how-it-works",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://app.cal.com https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://app.cal.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://*.cal.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://app.cal.com https://cal.com https://region1.google-analytics.com; frame-src https://app.cal.com https://cal.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig

