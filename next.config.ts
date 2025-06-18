/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // GitHub Pagesでの相対パスを適切に処理
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // 静的エクスポート時の設定
  experimental: {
    // 静的サイト生成を確実にする
  }
};

export default nextConfig;
