/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  }
  // 暂时移除rewrites配置，让默认路由处理机制生效
}

module.exports = nextConfig
