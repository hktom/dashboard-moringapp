/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  async redirects() {
    return [
      {
        source: "/page",
        destination: "/page/home/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
