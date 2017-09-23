<template>
  <div class="index checkout">
    <div class="page-wrapper">
      <Navigation />

      <section class="section">
        <div class="container">
          <h2>Resumen de compra</h2>
          <ul>
            <li v-for="product in $store.state.cart.products" track-by="$index">
              {{ product.fields.name }}<br>
              image: {{ product.fields.picture.fields.file.url }}<br>
              {{ product.fields.price }}<br>
              qty: {{ product.qty}}<br>
              {{ product.id }}
              <button class="button" v-on:click="$store.commit('plusOne', product.id)">+1</button>
              <button class="button" v-on:click="$store.commit('minusOne', product.id)">-1</button>
            </li>
          </ul>

          <form method="post" action="https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.run.webtask.io/verdea-place-order">
            <button type="submit">checkout</button>
            <input name="amount" type="hidden" value="$store.state.shoppingBag" />
          </form>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2>No hay productos en el carrito de compras</h2>
          <p>Regresa al <nuxt-link to="/">inicio</nuxt-link> para ver los productos disponibles.</p>
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
  },
  methods: {
    printCart () {
      console.log('being computed, ', this.$store.state.products)
      console.log(this.$store.state.products)
    }
  },
  computed: {
    getCart () {
      console.log('being computed, ', this.$store.state.products)
      return this.$store.state.products
    }
  }
}
</script>

<style scoped lang="scss">

</style>
