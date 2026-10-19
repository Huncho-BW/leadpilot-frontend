
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Keeps the existing Next.js caching configuration. */
  cacheComponents: true,
  partialPrefetching: true,

  /* Redirects the CRM homepage to the login page. */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false,
      },
    ];
  },

  /* Preserves the existing Tailwind CSS Turbopack setup. */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
