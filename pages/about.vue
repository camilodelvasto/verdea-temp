<template>
  <div class="index">
    <section class="statement">
      <div class="container">
        <div class="font-text">
          <h1>About</h1>
          <p>Edison bulb wolf humblebrag, chambray skateboard tbh shoreditch four loko unicorn semiotics. Hammock banh mi chillwave, brunch before they sold out roof party fixie prism ramps blog. Ramps yr four dollar toast hammock street art swag lyft, meggings schlitz chicharrones offal vegan selvage normcore. Hot chicken distillery keytar, ennui adaptogen heirloom ramps viral kombucha. Cardigan 8-bit.</p>
          <nuxt-link to="/"><button class="next slide">Next up: home</button></nuxt-link>
        </div>
      </div>
    </section>
  </div><!--container-->
</template>

<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style scoped lang="scss">

.statement {
  margin-top: 40px;
}


.hero.is-primary {
  background: transparent;
}

.page-enter-active {
  animation: acrossIn .15s ease-out both;
} 

.page-leave-active {
  animation: acrossOut .25s ease-in both;
} 

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

</style>
