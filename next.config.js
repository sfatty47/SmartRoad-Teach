/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  swcMinify: true
}

module.exports = nextConfig
