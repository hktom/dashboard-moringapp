/** @type {import('next').NextConfig} */
// const app_url = process.env.NEXT_PUBLIC_APP_URL;
let home_redirection = [
  {
    source: "/page",
    destination: "/page/home/",
    permanent: true,
  },
];
let admin_redirection = [
  {
    source: "/page",
    destination: "/page/home/",
    permanent: true,
  },
  {
    source: "/user/:slug*",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/category/:slug*",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/service/:slug*",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/country/:slug*",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/city/:slug*",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/condition/:slug*",
    destination: "/404",
    permanent: true,
  },
  {
    source: "/role/:slug*",
    destination: "/404",
    permanent: true,
  },
];

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  baseUrl: ".",
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  async redirects() {
    return process.env.NEXT_PUBLIC_APP_URL == "https://app.moringapp.com"
      ? admin_redirection
      : home_redirection;
  },
};

module.exports = nextConfig;
