import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "nuxt-primevue",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
  ],
  css: [
    "@/assets/styles/tailwind.scss",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "@/assets/styles/_index.scss",
    "primeicons/primeicons.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
    },
  },
  imports: {
    dirs: ["./stores"],
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  vite: {
    plugins: [svgLoader()],
  },
});
