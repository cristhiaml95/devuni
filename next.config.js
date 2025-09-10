/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', port: '' },
    ],
  },
  output: 'standalone',
  eslint: {
    dirs: ['src'],
  },
  // Permite que el dev server acepte requests desde la Preview de Firebase Studio
  
};

module.exports = nextConfig;
