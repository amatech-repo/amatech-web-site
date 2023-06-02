/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { isServer }) => {
    // 'browser'フィールドを削除する
    delete config.resolve.alias["browser"];

    if (!isServer) {
      config.node = {
        fs: "empty",
        net: "empty",
        tls: "empty",
      };
    }

    return config;
  },
};
