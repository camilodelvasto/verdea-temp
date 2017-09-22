<template>
  <div class="index checkout">
    <div class="page-wrapper">
      <Navigation />

      <section class="section">
        <div class="container">
          <h2>Resumen de compra</h2>
{{ $store.state.products['6D47MKl1GEkqi0eecu80CI'] }}
{{ $store.state.counter }} - 
          <ul>
            <li v-for="product in getCart" track-by="$index">
              hey
              {{ product.fields.name }}, {{ product.fields.picture.fields.file }}, {{ product.fields.price }}
            </li>
          </ul>

          <form method="post" action="https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.run.webtask.io/verdea-place-order">
            <button type="submit">checkout</button>
            <input name="amount" type="hidden" value="12540" />
          </form>

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
      console.log(this.$store.state.products)
    }
  },
  computed: {
    getCart () {
      console.log('being called, ', this.$store.state.products)
      return this.$store.state.products
    }
  }
}
</script>

<style scoped lang="scss">

</style>
