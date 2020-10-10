module.exports = {
  target: "static",
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: "nuxt-starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/netlify-files"],
  modules: ["@nuxtjs/axios", "@nuxt/content", "nuxt-i18n"],
  content: {
    dir: "assets/content"
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json"
      },
      {
        code: "fr",
        name: "Français",
        file: "fr.json"
      }
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "./locales/",
    vueI18n: {
      fallbackLocale: "en"
    }
  }
};
