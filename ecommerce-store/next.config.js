/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      "tailwindui.com",
      "res.cloudinary.com",
      "images.unsplash.com"
    ]
  }
}

module.exports = nextConfig
