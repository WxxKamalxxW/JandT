import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org"], // Allow external images from Wikimedia
  },

  appDir: true,};

export default nextConfig;
module.exports = nextConfig;

