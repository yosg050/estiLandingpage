// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // swcMinify: true,
//   // eslint: {
//   //   ignoreDuringBuilds: true,
//   // },
//   // typescript: {
//   //   ignoreBuildErrors: true,
//   // },
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig