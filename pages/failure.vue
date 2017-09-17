<template>
  <div class="index how">
    <div class="page-wrapper">
      <Navigation />

      <section class="section">
        <div class="container">
          <h2>Transacción fallida</h2>
          <p>La transacción no pudo ser completada.</p>
          <p><nuxt-link target="_blank" to="//startics.typeform.com/to/MtkSjl">Contáctanos</nuxt-link> si tienes problemas con nuestra tienda.</p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style scoped lang="scss">
</style>
