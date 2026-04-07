/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beta.kiuloper.com',
      },
    ],
  },
}

module.exports = nextConfig
