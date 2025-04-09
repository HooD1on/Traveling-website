/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5152/api/:path*' // 使用您的后端端口5152
      }
    ]
  }
}

module.exports = nextConfig   