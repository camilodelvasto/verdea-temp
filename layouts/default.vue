<template>
  <div class="wrapper">
    <div class="preloader" v-if="loading">
      <PagePreloader/>
    </div>
    <div class="default-layout">
      <nuxt v-bind:class="{ 'hide-on-load': loading }" v-if="!loading"/>
      <FooterTrust />
    </div>
  </div>
</template>

<script>
import PagePreloader from '~/components/PagePreloader.vue'
import FooterTrust from '~/components/FooterTrust.vue'

export default {
  components: {
    PagePreloader,
    FooterTrust
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