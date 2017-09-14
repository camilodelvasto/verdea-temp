<template>
    <nav>
      <div class="logo-wrapper">
        <nuxt-link exact to="/" class="logo">
          <figure class="logo">
            <img v-bind:src="logo.src" width="150">
          </figure>
        </nuxt-link>
      </div>
    </nav>
  </v-layout>
</template>

<style scoped lang="scss">
.logo-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
}

.expanded {
}
</style>

<script>
export default {
  data () {
    return {
      logo: {
        src: 'https://res.cloudinary.com/startics/image/upload/v1505337545/canva-photo-editor_gzpe73.png'
      }
    }
  }
}
</script>
