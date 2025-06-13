import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/otaki-campsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/otaki-campsite/' : '',
};

export default nextConfig;
