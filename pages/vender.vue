<template>
  <div class="index about">
    <Navigation />
    <section class="page-content">
      <div class="container">
        <h2>{{ content.sell.title }}</h2>
        <div class="paragraph">{{ content.sell.body }}</div>
      </div>
    </section>
  </div><!--container-->
</template>

<style scoped lang="scss">
.paragraph {

}

</style>

<script>
import socialImage from '~/assets/img/dabbawala.jpg'
import Navigation from '~/components/Navigation.vue'

export default {
  data () {
    return {
      prodBaseUrl: '',
      content: {
        sell: {
          title: '¿Cómo funciona?',
          body: 'Edison bulb wolf humblebrag, chambray skateboard tbh shoreditch four loko unicorn semiotics. Hammock banh mi chillwave, brunch before they sold out roof party fixie prism ramps blog. Ramps yr four dollar toast hammock street art swag lyft, meggings schlitz chicharrones offal vegan selvage normcore.'
        }
      }
    }
  },
  head () {
    return {
      title: 'This is the about page',
      meta: [
        { hid: 'description', name: 'description', content: 'Ironista is about being ironic' },
        { hid: 'og:title', property: 'og:title', content: 'Ironista is about being crazy twitter-ironic' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: this.prodBaseUrl + socialImage },
        { hid: 'og:url', property: 'og:url', content: this.prodBaseUrl + '/about/' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Ironista Site' },
        { hid: 'og:description', property: 'og:description', content: 'More descriptive text for twitter' }
      ]
    }
  },
  created: function () {
    if (process.env.NODE_ENV === 'production') {
      this.prodBaseUrl = 'https://ironista.com'
    } else {
      this.prodBaseUrl = process.env.baseUrl
    }
  },
  components: {
    Navigation
  }
}
</script>
