<template>
  <div class="index how">
    <div class="page-wrapper">
      <Navigation />

      <section class="section">
        <div class="container">
          <h2>¡Transacción exitosa!</h2>
          <p>Pronto vamos a procesar tu pedido y nos pondremos en contacto.</p>
          <p><nuxt-link target="_blank" to="//startics.typeform.com/to/MtkSjl">Contáctanos</nuxt-link> si tienes alguna duda sobre tu pedido.</p>
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
