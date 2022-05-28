const nextConfig = {
  compress: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  pageExtensions: ["page.tsx"],
};

const config = nextConfig;
module.exports = config;
