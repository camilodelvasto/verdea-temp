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
      { hid: 'description', name: 'description', content: 'Flores de amor con coco' },
      { hid: 'og:title', property: 'og:title', content: 'Flores de amor con coco' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/startics/image/upload/v1505401908/verdea-sticker_y1jitq.svg' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'verdea' },
      { hid: 'og:description', property: 'og:description', content: 'verdea: flores de amor con coco' },
    ],
    script: [
      { innerHTML: '{ "@context" : "http://schema.org", "@type" : "Organization", "legalName" : "verdea", "url" : "https://verdea.online/", "logo" : "https://res.cloudinary.com/startics/image/upload/v1505401908/verdea-sticker_y1jitq.svg", "contactPoint" : [{ "@type" : "ContactPoint", "telephone" : "+573192419869", "contactType" : "sales" }], "sameAs" : [ "https://facebook.com/verdeaonline/" ] }', type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Lato|Pacifico' }
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
  plugins: ['~/plugins/buefy.js'],
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
