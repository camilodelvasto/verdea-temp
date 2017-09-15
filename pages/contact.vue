<template>
  <div class="index contact">
    <div class="page-wrapper">
      <Navigation />
      <ContactForm />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    Navigation,
    ContactForm
  }
}
</script>

<style scoped lang="scss">

</style>
