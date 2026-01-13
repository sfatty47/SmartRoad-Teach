/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js'
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
