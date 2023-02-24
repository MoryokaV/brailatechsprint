/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cngmm.ro",
      "imgur.com",
      "i.imgur.com",
      "archive.andreiusq.dev",
      "scontent.fotp3-3.fna.fbcdn.net",
      "scontent.fotp3-2.fna.fbcdn.net",
      "scontent.fotp3-1.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
