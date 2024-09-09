/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
        pathname: '**',
      },

    ],
  },
  async headers() {
    return [
      {
        // Match all assets in the /public/assets/img directory
        source: '/assets/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800', // Cache for one week (604800 seconds)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
