import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Usama-Protfolio',
  assetPrefix: '/Usama-Protfolio/',
};

export default nextConfig;
