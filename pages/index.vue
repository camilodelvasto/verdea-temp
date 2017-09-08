<template>
  <div class="index">
    <section class="hero is-primary is-medium"
      v-bind:style="{ backgroundImage: `url('${image}')` }"
    >
      <div class="hero-body">
        <div class="container">
          <div class="title-wrapper">
            <h1 class="title">
              La cultura no se improvisa, ni se cambia de la noche a la mañana
            </h1>
          </div>
          <h2 class="subtitle">
            Pero tampoco tiene que tomar una vida
          </h2>
        </div>
      </div>
    </section>

    <section class="statement">
      <div class="container">
        <div class="font-text">
          <h1>Playfair Serif</h1>
          <p>Edison bulb wolf humblebrag, chambray skateboard tbh shoreditch four loko unicorn semiotics. Hammock banh mi chillwave, brunch before they sold out roof party fixie prism ramps blog. Ramps yr four dollar toast hammock street art swag lyft, meggings schlitz chicharrones offal vegan selvage normcore. Hot chicken distillery keytar, ennui adaptogen heirloom ramps viral kombucha. Cardigan 8-bit.</p>
          <nuxt-link to="/about"><button class="next slide">Next up: about</button></nuxt-link>
        </div>
      </div>
    </section>
  </div><!--container-->
</template>

<script>
export default {
  transition: 'fadeOpacity',
  data () {
    return {
      image: require('~/assets/img/dabbawala.jpg')
    }
  }
}
</script>

<style scoped lang="scss">
.title-wrapper {

  @include breakpoint($sm) {
    text-align: right;
  }

  .title {
    font-size: 40px;
    background: rgba($color-emphasis,0.7);
    display: inline;
    line-height: 1.38;

    @include breakpoint($sm) {
      font-size: 55px;
    }
  }
}

.statement {
  margin-top: 40px;
}

.subtitle {
  font-size: 30px;
  padding-top: 20px;
  display: block;
  text-align: right;
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
