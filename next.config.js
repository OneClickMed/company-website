/** @type {import('next').NextConfig} */
const POSTHOG_PROXY_PATH = '/_ocm'

const nextConfig = {
  images: {
    qualities: [70, 75],
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()',
          },
        ],
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
