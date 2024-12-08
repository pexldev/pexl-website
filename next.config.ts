import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Adding our trusted image source
  },
  /* config options here */
};

export default nextConfig;
