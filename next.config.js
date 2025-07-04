/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
