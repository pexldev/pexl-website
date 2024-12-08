import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Adding our trusted image source
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint checks during builds
  },
  /* config options here */
};

export default nextConfig;
