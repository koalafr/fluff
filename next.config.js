/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/fr/projects/:slug",
        destination: "/projects/:slug",
        permanent: false,
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
