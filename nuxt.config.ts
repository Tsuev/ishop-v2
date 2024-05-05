export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-primevue", "@vueuse/nuxt", "@nuxtjs/supabase"],
  css: [
    "@/assets/styles/tailwind.scss",
    "primevue/resources/themes/aura-dark-blue/theme.css",
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
  },
});
