/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export for Cloudflare Pages (or use @cloudflare/next-on-pages for full features)
};

export default nextConfig;
