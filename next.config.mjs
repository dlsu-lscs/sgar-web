/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CDN_URL = process.env.CDN_URL;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(API_URL).hostname,
      },
      {
        protocol: "https",
        hostname: new URL(CDN_URL).hostname,
      },
      
    ],
  },
};

export default nextConfig;
