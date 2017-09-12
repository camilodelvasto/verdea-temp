<template>
  <div class="index about">
    <section class="statement hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="statement-large">
            <span class="st-1">Gobiernos, organizaciones y ciudades tienen problemas: obesidad, <span class="add-emphasis">violencia</span>, movilidad y más. </span>
            <span class="st-2">Ellos han tratado de solucionarlos de distintas maneras. Y no han podido. </span>
            <span class="st-3"><a>Nosotros</a> creemos que la solución está en el aprendizaje cultural colectivo. </span>
            <nuxt-link to="/how">¿Cómo lo hacemos?</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div><!--container-->
</template>

<script>
import socialImage from '~/assets/img/dabbawala.jpg'

export default {
  transition: 'bounce',
  head () {
    return {
      title: 'This is the about page',
      meta: [
        { hid: 'description', name: 'description', content: 'Ironista is about being ironic' },
        { hid: 'og-title', property: 'og-title', content: 'Ironista is about being crazy twitter-ironic' },
        { hid: 'og-image', property: 'og-image', content: this.prodBaseUrl + socialImage },
        { hid: 'og-site_name', property: 'og-site_name', content: 'Ironista Site' },
        { hid: 'og-description', property: 'og-description', content: 'More descriptive text for twitter' }
      ]
    }
  },
  created: function () {
    if (process.env.NODE_ENV === 'production') {
      this.prodBaseUrl = 'https://ironista.com'
    } else {
      this.prodBaseUrl = process.env.baseUrl
    }
  }
}
</script>

<style scoped lang="scss">

</style>
