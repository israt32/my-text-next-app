/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://plus.unsplash.com/premium_photo-1787073568269-b308af3135f1
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
