import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "logo512x512.png",
        "logo192x192.png",
        "logo144x144.png",
        "logo96x96.png",
        "logo72x72.png",
        "logo48x48.png",
        "logo36x36.png",
      ],
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif}"],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "offlineCache",
              expiration: {
                maxEntries: 20000,
              },
            },
          },
        ],
      },
      manifest: {
        name: "PPOB App",
        short_name: "PPOB",
        description: "Aplikasi PPOB",
        theme_color: "#ffffff",
        start_url: "/login",
        display: "standalone",
        icons: [
          {
            src: "logo512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "logo96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "logo72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "logo48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "logo36x36.png",
            sizes: "36x36",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
