/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: process.env.DB_URI,
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
