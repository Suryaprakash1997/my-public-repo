/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['tailwind-config', 'ui'],
};

module.exports = nextConfig;
