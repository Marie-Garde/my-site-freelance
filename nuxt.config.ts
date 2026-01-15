// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css",
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  },

  css: ["@/assets/scss/global.scss"],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables" as *;
          `,
        },
      },
    },
  },
});
