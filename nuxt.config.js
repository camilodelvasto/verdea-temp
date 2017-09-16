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
    title: 'verdea',
    titleTemplate: '%s - verdea.online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Flores de amor y coco' },
      { hid: 'og:title', property: 'og:title', content: 'Flores de amor y coco' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/startics/image/upload/v1505401908/verdea-sticker_y1jitq.svg' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'verdea' },
      { hid: 'og:description', property: 'og:description', content: 'verdea: flores de amor y coco' },
    ],
    script: [
      { innerHTML: '{ "@context" : "http://schema.org", "@type" : "Organization", "legalName" : "verdea", "url" : "https://verdea.online/", "logo" : "https://res.cloudinary.com/startics/image/upload/v1505401908/verdea-sticker_y1jitq.svg", "contactPoint" : [{ "@type" : "ContactPoint", "telephone" : "+573192419869", "contactType" : "Ventas" }], "sameAs" : [ "https://facebook.com/verdeaonline/" ] }', type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Lato|Pacifico' }
    ]
  },
  env: {
    baseUrl: 'http://localhost:3000'
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
