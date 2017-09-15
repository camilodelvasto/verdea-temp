<template>
  <div class="index">
    <div class="page-wrapper">
      <Navigation />
      <Stripe />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Stripe from '~/components/Stripe.vue'

export default {
  components: {
    Navigation,
    Stripe
  }
}
</script>

<style scoped lang="scss">
</style>
