/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ['i.imgur.com', 'localhost'],
  }
}

module.exports = nextConfig
