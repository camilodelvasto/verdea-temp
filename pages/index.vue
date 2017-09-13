<template>
  <div class="index">
    <Navigation />
    <Carousel />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Carousel from '~/components/Carousel.vue'

export default {
  transition: 'page',
  components: {
    Navigation,
    Carousel
  }
}
</script>

<style scoped lang="scss">

</style>
