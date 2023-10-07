/** @type {import('next').NextConfig} */
const nextConfig = {
  // envファイルを読み込む
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
