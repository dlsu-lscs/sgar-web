/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL(`${API_URL}/**`)],
  },
};

export default nextConfig;
