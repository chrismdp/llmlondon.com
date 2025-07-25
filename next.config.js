/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow external domains if event assets come from Luma or CMS
    domains: ['images.ctfassets.net', 'images.unsplash.com', 'assets.luma.ai'],
  },
};

module.exports = nextConfig;