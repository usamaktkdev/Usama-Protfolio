import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Green-Portfolio',
  assetPrefix: '/Green-Portfolio/',
};

export default nextConfig;
