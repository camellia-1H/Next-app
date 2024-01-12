/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dwnfc0zdt/image/upload/v1704704011/Blog/**',
        },
      ],
    },
  }
