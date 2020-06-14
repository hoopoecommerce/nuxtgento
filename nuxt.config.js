import pkg from './package'
require('dotenv').config()

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      class: 'antialiased text-black'
    },
    bodyAttrs: {
      class: 'min-h-screen'
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f60', height: '3px', throttle: 0 },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/globals'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'magento',
        path: '*',
        component: resolve(__dirname, '~/pages/_magento.vue')
      })
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/proxy',
    '@bazzite/nuxt-optimized-images'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  optimizedImages: {
    optimizeImages: true
  },

  apollo: {
    tokenName: 'signin_token',
    clientConfigs: {
      default: '~/plugins/apollo-config.js'
    }
  },

  proxy: [process.env.MAGENTO_BACKEND_URL],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
