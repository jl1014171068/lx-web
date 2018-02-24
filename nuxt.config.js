module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'pingchang-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    // vendor: ['axios'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3333',
    HOST: '127.0.0.1',
    PORT: '3333'
  },
  plugins: ['~plugins/axios', '~plugins/element','~plugins/global'],
  router: {
    // middleware: ['auth']
  }
}
