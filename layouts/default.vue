<template>
  <div>
    <div class="preloader" v-if="loading">
      <PagePreloader/>
    </div>
    <div class="default-layout">
      <nuxt v-bind:class="{ 'hide-on-load': loading }" v-if="!loading"/>
    </div>
  </div>
</template>

<script>
import PagePreloader from '~/components/PagePreloader.vue'

export default {
  components: {
    PagePreloader
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style>
</style>