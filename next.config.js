/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      "cngmm.ro",
      "imgur.com",
      "i.imgur.com",
      "archive.andreiusq.dev",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
