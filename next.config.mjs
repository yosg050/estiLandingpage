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
};

export default nextConfig

