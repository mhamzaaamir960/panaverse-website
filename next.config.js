/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    glob: false,
  },
};

module.exports = nextConfig;
