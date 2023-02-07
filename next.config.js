/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/spotify',
        destination:
          'https://open.spotify.com/user/312wkcarckpr64ibtf3jvgnvpnyi',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
