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
          <nuxt-link to="/nosotros" class="navbar-item">Nosotros</nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">Contacto</nuxt-link>
        </div>
        <div class="navbar-end"
          v-on:click="closeMobileMenu()"
        >
          <nuxt-link to="https://facebook.com/verdeaonline" class="navbar-item" target="_blank">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </svg>
          </nuxt-link>
          <nuxt-link to="https://facebook.com/verdeaonline" class="navbar-item" target="_blank">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
            </svg>
          </nuxt-link>
          <nuxt-link to="https://facebook.com/verdeaonline" class="navbar-item" target="_blank">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path d="M10,16.5V7.5L16,12M20,4.4C19.4,4.2 15.7,4 12,4C8.3,4 4.6,4.19 4,4.38C2.44,4.9 2,8.4 2,12C2,15.59 2.44,19.1 4,19.61C4.6,19.81 8.3,20 12,20C15.7,20 19.4,19.81 20,19.61C21.56,19.1 22,15.59 22,12C22,8.4 21.56,4.91 20,4.4Z" />
            </svg>
          </nuxt-link>
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
  height: 80px;

  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 900;

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

    a.navbar-item {
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
      animation: movingBackground ease-in-out infinite 18s;

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
import LogoAlt from '~/components/LogoAlt.vue'

export default {
  components: {
    Logo,
    LogoAlt
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
  }
}
</script>