const resolve = require('path').resolve

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/scss/_base.scss')
    ]
  }
}

const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'verdea',
    titleTemplate: '%s - verdea.online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'aSiktNyou87KF2WS9VKomNYKwPCeKhuUvnJs26P9bZc' },
      { hid: 'description', name: 'description', content: 'El encuentro de la naturaleza y el arte. Materas orgánicas hechas con amor para plantas únicas.' },
      { hid: 'og:url', property: 'og:url', content: 'https://verdea.online/' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Verdea: regala vida' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/startics/image/upload/v1507093583/favicon_vpshut.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'verdea' },
      { hid: 'og:description', property: 'og:description', content: 'El encuentro de la naturaleza y el arte. Materas orgánicas hechas con amor para plantas únicas.' },
    ],
    script: [
      { innerHTML: '{ "@context" : "http://schema.org", "@type" : "Organization", "legalName" : "verdea", "url" : "https://verdea.online/", "logo" : "https://res.cloudinary.com/startics/image/upload/v1507093583/favicon_vpshut.png", "contactPoint" : [{ "@type" : "ContactPoint", "telephone" : "+573192419869", "contactType" : "sales" }], "sameAs" : [ "https://facebook.com/verdeacolombia/" ] }', type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Lato|Pacifico|Questrial' }
    ]
  },
  env: {
    baseUrl: 'http://localhost:3000',
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PRODUCT_ID: config.CTF_PRODUCT_ID
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#674E7A'
  },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/buefy.js' },
    { src: '~plugins/persistedstate.js', ssr: false }
  ],
  css: ['~/assets/main.scss'],
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-15029066-25' }],
  ],  
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /* Allow global scss */
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
    }
  }
}
