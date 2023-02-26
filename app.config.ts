export default defineAppConfig({
  baseURL: "/",
  buildAssetsDir: "/_nuxt/",
  pageTransition: { name: 'page', mode: 'out-in' },
  head: {
    title: "Nuxtjs app with typescript!",
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        charset: "utf-8",
      },
    ],
    link: [],
    style: [],
    script: [],
    noscript: [],
  }
});
