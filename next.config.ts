/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, //Remove in production
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1', // Add this!
        port: '1337',
        pathname: '/uploads/**',
      },
      // If you eventually deploy Strapi to a real URL, add it here too:
      // {
      //   protocol: 'https',
      //   hostname: 'your-strapi-app.onrender.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
};

export default nextConfig;