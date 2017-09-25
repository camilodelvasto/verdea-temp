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
          v-on:click="closeMobileMenu()"
        >
          <LogoAlt />
        </div>

        <div id="#nav-burger-trigger" class="navbar-burger"
          v-bind:class="{ 'is-active': showMobileMenu }"
          v-on:click="toggleMobileMenu()"
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
          v-on:click="closeMobileMenu()"
        >
          <nuxt-link exact to="/" class="navbar-item">Regala vida</nuxt-link>
          <nuxt-link to="/como-comprar" class="navbar-item">¿Cómo funciona?</nuxt-link>
          <nuxt-link target="_blank" to="//startics.typeform.com/to/MtkSjl" class="navbar-item">Contacto</nuxt-link>
          <a href="tel:+573192419869" class="navbar-item hide-desktop">Tel: 319 241 9869</a>
          <span class="navbar-item hide-mobile">Tel: 319 241 9869</span>
          <nuxt-link to="/checkout" class="navbar-item show-mobile-and-desktop cart">
            <span>{{ itemsInCart }}</span>
            <CartIcon/>
          </nuxt-link>

        </div>
        <div class="navbar-end"
          v-on:click="closeMobileMenu()"
        >
          <nuxt-link to="//instagram.com/verdeascolombia/" class="navbar-item" target="_blank">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </svg>
          </nuxt-link>
          <nuxt-link to="//www.facebook.com/verdeacolombia" class="navbar-item" target="_blank">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
            </svg>
          </nuxt-link>
          <nuxt-link to="//api.whatsapp.com/send?phone=573192419869" class="navbar-item" target="_blank">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navbar-burger {
  transform: translate(10px,9px);
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
      background-color: $color-bg-dark;

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
          background-color: $color-emphasis;
        }
      }
    }
  }
}

.navbar-container {
  display: flex;
}

.nav-container {
  height: 70px;

  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 900;
    background-color: rgba(white, 0.95);

    .logo-alt {
      display: none;

      @include breakpoint($sm) {
        margin: 40px auto;
      }
    }

    @include breakpoint($bulma) {
      align-items: center;
    }

    > .container {
      width: inherit;
    }

    &.expanded {
      background-color: $color-bg-light;
      opacity: 1;
      transition: background-color 0.4s ease-in-out;
      transition: opacity 0.2s ease-in-out;
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

      > .container {
        min-height: 35vh;

        @include breakpoint($i6) {
          min-height: 45vh;
        }
      }
    }
  }

  .navbar-menu {
    box-shadow: none;
    flex: 1;

    @include breakpoint($bulma) {
      flex-direction: row-reverse;
    }

    .navbar-item {
      font-family: $font-secondary;
      text-align: center;
      font-size: 16px;
      text-transform: uppercase;

      @include breakpoint($sm) {
        font-size: 24px;
        text-align: center;
      }

      @include breakpoint($bulma) {
        display: block;
        font-size: 16px;
      }

      &.nuxt-link-exact-active {
        color: $color-emphasis;
      }
    }

    &.is-active {
      display: flex;
      flex-direction: column;
      background-color: $color-emphasis;

      a.navbar-item {
        color: $color-bg-light;

        &:hover {
          background-color: transparent;
          color: rgba($color-bg-dark, 0.8);
        }
      }

      @include breakpoint($bulma) {
        display: flex;
        flex-direction: column;
      }
    }

    .navbar-start {
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      @include breakpoint($i6) {
        padding-top: 40px;
      }

      @include breakpoint($sm) {
        padding-top: 80px;
        flex-direction: column;
      }

      @include breakpoint($bulma) {
        padding-top: 15px;
        flex-direction: row;
      }

      @media (max-width: 767px) and (orientation: landscape) {
        display: none;
      }
    }

    svg {
      path {
        fill: $color-bg-light;

        @include breakpoint($bulma) {
          fill: $color-emphasis;
        }
      }

      &:hover {
        path {
          fill: $color-bg-dark;

          @include breakpoint($bulma) {
            fill: $color-emphasis-alt;
          }
        }
      }
    }

    .navbar-end {
      flex-direction: row;
      flex: 1;
      align-items: center;
      display: flex;
      justify-content: center;

      @include breakpoint($bulma) {
        justify-content: flex-end;
        align-items: bottom;
        padding-top: 10px;
      }

      @include breakpoint($bulma) {
        align-items: flex-end;
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

    .cart {
      display: flex;
      margin-top: -7px;

      span {
        align-self: center;
        min-width: 20px;
      }
    }
  }

  .navbar-brand {
    height: 65px;
  }
}

</style>

<script>
import Logo from '~/components/Logo.vue'
import LogoAlt from '~/components/LogoAlt.vue'
import CartIcon from '~/components/CartIcon.vue'

export default {
  components: {
    Logo,
    LogoAlt,
    CartIcon
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu () {
      var vm = this
      vm.showMobileMenu = !vm.showMobileMenu
      if (vm.showMobileMenu) {
        vm.openMobileMenu()
      } else {
        vm.closeMobileMenu()
      }
    },
    closeMobileMenu () {
      var vm = this
      document.body.classList.remove('modal-open')
      vm.showMobileMenu = false
    },
    openMobileMenu () {
      var vm = this
      document.body.classList.add('modal-open')
      vm.showMobileMenu = true
    }
  },
  computed: {
    itemsInCart () {
      return this.$store.state.cart.qty
    }
  }
}
</script>