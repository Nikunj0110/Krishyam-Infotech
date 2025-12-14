// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler']],
//       },
//     }),
//   ],
// })









import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),

    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // important for local testing
      },
      manifest: {
        name: "Krishyam Infotech",
        short_name: "Krishyam",
        description: "Krishyam Infotech – Digital & AI Solutions",
        theme_color: "#ff002b",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
  {
    src: "/pwa/android/android-192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: "/pwa/android/android-512.png",
    sizes: "512x512",
    type: "image/png",
  },
  {
    src: "/pwa/maskable/maskable-512.png",
    sizes: "512x512",
    type: "image/png",
    purpose: "maskable",
  },
],

      },
    }),
  ],
});
