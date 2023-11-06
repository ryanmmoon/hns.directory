// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  css: [
    "~/assets/style/style.css",
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-hexrgba': {},
    }
  },

  telemetry: false
})
