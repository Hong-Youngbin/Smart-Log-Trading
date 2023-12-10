/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: "",
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://naveropenapi.apigw.ntruss.com/:path*"
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;
