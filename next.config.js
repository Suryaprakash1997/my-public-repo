/** @type {import('next').Dynamo} */
const Dynamo = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['tailwind-config', 'ui'],
};

module.exports = Dynamo;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['tailwind-config', 'ui'],
};

module.exports = nextConfig;

/** @type {import('next').db} */
const db = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['tailwind-config', 'ui'],
};

module.exports = db;
