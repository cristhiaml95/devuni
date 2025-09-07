/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', port: '' },
    ],
  },
  // Permite que el dev server acepte requests desde la Preview de Firebase Studio
  allowedDevOrigins: ['*.cloudworkstations.dev'],
};

module.exports = nextConfig;
