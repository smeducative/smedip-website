/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "i.ytimg.com",
      },
      {
        hostname: "object-smeducative.is3.cloudhost.id",
      },
      {
        hostname: "is3.cloudhost.id",
      },
    ],
  },
};

export default nextConfig;
