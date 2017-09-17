<template>
  <div class="wrapper">
    <div class="preloader" v-if="loading">
      <PagePreloader/>
    </div>
    <div class="default-layout">
      <nuxt v-bind:class="{ 'hide-on-load': loading }" v-if="!loading"/>
      <Footer />
    </div>
  </div>
</template>

<script>
import PagePreloader from '~/components/PagePreloader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    PagePreloader,
    Footer
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>