/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   customKey: "http://192.168.1.150",
  // },
  images: {
    // domains: ["192.168.0.103"],
    remotePatterns: [
      {
        hostname: "192.168.0.109",
      },
    ],
  },
};

module.exports = nextConfig;
