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

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'camioncito',
    titleTemplate: '%s - Camioncito.club',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gourmet Food on Wheels' },
      { hid: 'og:title', property: 'og:title', content: 'Gourmet Food on Wheels' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Camioncito' },
      { hid: 'og:description', property: 'og:description', content: 'Camioncito: Gourmet Food on Wheels' },
    ],
    script: [
      { innerHTML: '{ "@context" : "http://schema.org", "@type" : "Organization", "legalName" : "Camioncito", "url" : "https://camioncito.club/", "logo" : "" }', type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  plugins: ['~/plugins/buefy.js'],
  css: ['~/assets/main.scss'],
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
