<template>
  <div class="nav-container">
    <nav class="navbar is-transparent"
      v-bind:class="{ 'expanded': showMobileMenu }"
    >
      <div class="container is-fluid navbar-container">
        <div class="navbar-brand">
          <Logo />
        </div>
        <div class="logo-alt"
          v-on:click="showMobileMenu = false"
        >
          <nuxt-link exact to="/">
            <img src="http://res.cloudinary.com/startics/image/upload/v1505336399/oie_transparent_thz7me.png" width="266" height="183" alt="Camioncito">
          </nuxt-link>
          </div>

        <div id="#nav-burger-trigger" class="navbar-burger"
          v-bind:class="{ 'is-active': showMobileMenu }"
          v-on:click="showMobileMenu = !showMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-start"
          v-on:click="showMobileMenu = false"
        >
          <nuxt-link exact to="/" class="navbar-item">¡Pedir ya!</nuxt-link>
          <nuxt-link to="/como-funciona" class="navbar-item">¿Cómo funciona?</nuxt-link>
          <nuxt-link to="/vender" class="navbar-item">Vender en Camioncito</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navbar-burger {
  transform: translate(10px,13px);
  position: fixed;
  top: 0;
  right: 15px;

  span {
    width: 25px;
    margin-left: -12px;
    background-color: $color-bg-dark;

    &:nth-child(1) {
      margin-top: -10px;
    }

    &:nth-child(3) {
      margin-top: 8px;
    }
  }

  &.is-active {
    span {
      background-color: $color-bg-orange;

      &:nth-child(1) {
        margin-top: -10px;
        margin-left: -7px;
      }

      &:nth-child(3) {
        margin-top: 8px;
        margin-left: -7px;
      }
    }
  }

  &:hover {
    background-color: inherit;

    span {
      background-color: $color-emphasis-alt;
    }
  }
}

@include breakpoint($xs) {
  .navbar-burger {
    &:hover {
      span {
        background-color: $color-bg-dark;
      }
    }
    &.is-active {
      &:hover {
        span {
          background-color: $color-bg-light;
        }
      }
    }
  }
}

.navbar-container {
  display: flex;
}

.nav-container {
  height: 75px;

  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 900;

    .logo-alt {
      display: none;
      margin: 40px auto;
    }

    @include breakpoint($bulma) {
      align-items: center;
    }

    > .container {
      width: inherit;
    }

    &.expanded {
      background-color: $color-bg-1;
      opacity: 1;
      transition: background-color 0.4s ease-in-out;
      transition: opacity 0.4s ease-in-out;
      height: 100%;
      display: flex;
      flex-direction: column;
      bottom: 0;

      .navbar-brand {
        display: none;        
      }

      .logo-alt {
        display: block;
        animation: appearIn 0.4s;
      }
    }
  }

  .navbar-menu {
    box-shadow: none;
    flex: 1;

    a.navbar-item {
      font-family: $font-primary;
      text-align: center;
      font-size: 30px;

      @include breakpoint($sm) {
        font-size: 50px;
        text-align: center;
      }

      @include breakpoint($bulma) {
        display: block;
        font-size: 20px;
      }

      &.nuxt-link-exact-active {
        color: $color-emphasis;
      }
    }

    &.is-active {
      display: flex;
      flex-direction: column;

      a.navbar-item {
        color: $color-bg-2;

        &:hover {
          background-color: transparent;
          color: $color-emphasis;
        }
      }

      @include breakpoint($bulma) {
        display: flex;
        flex-direction: column;
      }      
    }

    .navbar-start {
      padding-top: 60px;
      display: flex;
      flex-direction: column;

      @include breakpoint($bulma) {
        padding-top: 0;
        margin-right: 0;
        margin-left: auto;
        flex-direction: row;
      }
    }

    .navbar-end {
      flex-direction: row;
      flex: 1;
      align-items: flex-end;
      display: flex;
      justify-content: center;

      @include breakpoint($bulma) {
        align-items: center;
      }

      a.navbar-item {
        font-size: 16px;
        font-family: $font-secondary;
        text-transform: lowercase;
        letter-spacing: 1px;

        @include breakpoint($bulma) {
          font-size: 20px;
        }
      }
    }
  }

  .navbar-brand {
    height: 75px;

    @include breakpoint($bulma) {
      transform: translateX(-20px);
    }
  }
}

</style>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  watch: {
    showMobileMenu: function (newVal) {
      if (newVal) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    },
    '$route' (to, from) {
      document.body.classList.remove('modal-open')
      console.log('route left')
    }
  }
}
</script>