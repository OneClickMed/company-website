/** @type {import('next').NextConfig} */
const POSTHOG_PROXY_PATH = '/_ocm'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beta.kiuloper.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: `${POSTHOG_PROXY_PATH}/static/:path*`,
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: `${POSTHOG_PROXY_PATH}/:path*`,
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
