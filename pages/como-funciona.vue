<template>
  <div class="index how">
    <section class="statement hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="statement-large">
            <h2>{{ content.how.title }}</h2>
            <div class="content">{{ content.how.body }}</div>
            <nuxt-link to="/about">¿Por qué lo hacemos?</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div><!--container-->
</template>

<script>

export default {
  transition: {
    mode: 'bounce'
  },
  data () {
    return {
      content: {
        how: {
          title: '¿Cómo funciona?',
          body: 'Edison bulb wolf humblebrag, chambray skateboard tbh shoreditch four loko unicorn semiotics. Hammock banh mi chillwave, brunch before they sold out roof party fixie prism ramps blog. Ramps yr four dollar toast hammock street art swag lyft, meggings schlitz chicharrones offal vegan selvage normcore.'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
