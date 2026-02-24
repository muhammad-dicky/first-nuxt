// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // CONTOH PENGGUNAAN LAYOUT BERBEDA DI TIAP ROLE
  //  routeRules: {
  //   // Set layout for specific route
  //   '/admin': { appLayout: 'admin' },
  //   // Set layout for multiple routes
  //   '/dashboard/**': { appLayout: 'dashboard' },
  //   // Disable layout for a route
  //   '/landing': { appLayout: false },
  // },

  // CONTOH SETTING CSS KALO DARI CONFIG
  // css:['/assets/css/main.css'],

  // CONTOH SETTING ANIMATE DARI CONFIG
  // css:['animate.css'],

  // CONTOH SETTING EXTERNAL STYLE 
  //  app: {
  //   head: {
  //     link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
  //   },
  // },
  app:{
    pageTransition:{name:'page', mode:'out-in'},
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})