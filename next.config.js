/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['dayjs', 'lightweight-charts'],

  async rewrites() {
    return [
      {
        source: '/symbol',
        destination: 'https://api.billionaire.codes/symbol',
      },
      {
        source: '/candle/BTCUSDT',
        destination: 'https://api.billionaire.codes/candle/BTCUSDT',
        // destination: 'https://api.binance.com/api/v3/ping',
      },
    ];
  },
};

module.exports = nextConfig;

