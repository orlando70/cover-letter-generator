/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/b7Q8rD2/cova-high-resolution-logo-color-on-transparent-background.png/**',
      },
    ],
  },
}


module.exports = nextConfig
