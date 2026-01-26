/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CDN_URL = process.env.CDN_URL;

const remotePatterns = [];

if (API_URL) {
  remotePatterns.push({
    protocol: "https",
    hostname: new URL(API_URL).hostname,
    pathname: "/**",
  });
}

if (CDN_URL) {
  remotePatterns.push({
    protocol: "https",
    hostname: new URL(CDN_URL).hostname,
    pathname: "/**",
  });
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns,
  },
};

export default nextConfig;
