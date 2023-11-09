/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },

  redirects: async () => [
    {
      source: "/spotify",
      destination: "https://open.spotify.com/user/312wkcarckpr64ibtf3jvgnvpnyi",
      permanent: true,
    },
    {
      source: "/assets-skripsi",
      destination:
        "https://drive.google.com/drive/folders/1DOW-uM6Mzou00sh3qGxjyuW8eAJPIJPc?usp=sharing",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
