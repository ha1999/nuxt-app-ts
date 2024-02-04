// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-primevue'],
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  primevue: {
    components: {
      prefix: 'P',
      include: ['Button', 'DataTable', 'AutoComplete'],
    },
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css'],
})
