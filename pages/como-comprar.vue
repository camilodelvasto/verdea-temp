<template>
  <div class="index how">
    <div class="page-wrapper">
      <Navigation />

      <section class="section">
        <div class="container">
          <h2>¿Qué es una verdea?</h2>
          <p>verdea es una planta hermosa hecha a mano y con coco, que dura muchos días y que no suelta agua. Como es tan linda, no necesitas materas, y es toda hecha con ingredientes naturales.</p>
          <h2>¿Cómo puedo comprar?</h2>
          <p>Dirígete a <nuxt-link exact to="/">nuestra tienda</nuxt-link>, selecciona la verdea que quieres y dale click en <strong>comprar</strong>. Esto te llevará a nuestro systema de pagos en línea con PayU.</p>
          <h2>¿La llevan a mi casa?</h2>
          <p>Nosotros entregamos verdeas en Bogotá, afuera de la ciudad y en ocasiones fuera de Colombia. Puedes <nuxt-link target="_blank" to="//startics.typeform.com/to/MtkSjl">contactarnos</nuxt-link> para saber si podemos llevarlas hasta donde lo necesitas.</p>
        </div>
      </section>

      <section class="hero"
        v-bind:style="{ backgroundImage: 'url(https://res.cloudinary.com/startics/image/upload/v1505492455/imageedit_6_6230174407_hop5zy.jpg)'}"
      >
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Una verdea para ti, una para mí.
            </h1>
          </div>
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
.hero {
  background-size: cover;
  .title {
    font-family: $font-logo;
    color: $color-bg-light;
    text-align: right;
    background: rgba(black, 0.2);
  }
}

</style>
