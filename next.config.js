/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  emitCssInSsr: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVanillaExtract(nextConfig);
