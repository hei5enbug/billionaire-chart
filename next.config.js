/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.billionaire.codes/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
