<template>
  <div class="index">
    <div class="modal"
      v-bind:class="{ 'is-active': showingModal }"
    >
      <div class="modal-background" v-on:click="closeModalImage()"></div>
      <div class="modal-content">
        <p class="image">
          <img v-bind:src="img">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="closeModalImage()"></button>
    </div>
    <div class="page-wrapper">
      <Navigation />
      <div class="feed-wrapper ">
        <div class="flexitem canvas-left columns">
            <div class="fixed">
              <div class="card special">
                <div class="card-image">
                  <figure class="image">
                    <img src="https://res.cloudinary.com/startics/image/upload/v1506045849/E707D0B2-36DA-406E-83CB-FEE0DC5D3D60_lrt7x6.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    Verdea: el encuentro de la naturaleza y el arte. Materas orgánicas hechas con amor para plantas únicas.
                  </div>
                </div>
              </div> <!-- card -->
            </div>
        </div>
        <div class="flexitem canvas-feed columns is-multiline">
          <div class="card column is-half-tablet" v-for="product in products">
            <div class="card-image">
              <figure class="image">
                <a v-on:click="openModal(product.fields.picture.fields.file.url)">
                  <img v-bind:src="product.fields.picture.fields.file.url" >
                </a>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <span>{{ product.fields.name }}: {{ product.fields.price | currency }}</span>
                  <button class="button is-success"
                          @click="$store.commit('addToCart', product)"
                          v-if="!isInCart(product.sys.id)"
                  >Añadir</button>
                  <button class="button is-warning"
                          @click="$store.commit('removeFromCart', product)"
                          v-else
                  >Eliminar</button>
                  <nuxt-link class="cart-icon button" to="/checkout" v-if="isInCart(product.sys.id)">
                    <CartIcon/>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div> <!-- card -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import {createClient} from '~/plugins/contentful.js'
import CartIcon from '~/components/CartIcon.vue'

const client = createClient()

export default {
  transition: 'page',
  components: {
    Navigation,
    CartIcon
  },
  data () {
    return {
      showingModal: false,
      img: ''
    }
  },
  asyncData ({env}) {
    return Promise.all([
      // fetch all blog products sorted by creation date
      client.getEntries({
        'content_type': env.CTF_PRODUCT_ID,
        order: '-sys.createdAt'
      })
    ]).then(([products]) => {
      // return data that should be available
      // in the template
      return {
        products: products.items
      }
    }).catch(console.error)
  },
  methods: {
    isInCart (productId) {
      return this.$store.state.cart.products[productId] !== undefined
    },
    openModal (img) {
      var vm = this
      vm.img = img
      vm.openModalImage()
    },
    closeModalImage () {
      var vm = this
      document.body.classList.remove('modal-open')
      vm.showingModal = false
    },
    openModalImage () {
      var vm = this
      document.body.classList.add('modal-open')
      vm.showingModal = true
    }
  },
  filters: {
    currency: function (value) {
      return '$' + value.toLocaleString('es-CO')
    }
  }
}
</script>

<style scoped lang="scss">
.feed-wrapper {
  background-size: cover;

}
.column {
  padding: 0;
}

.columns {
  margin-left: 0;
  margin-right: 0;
}

.card {
  border: 12px solid white;
  margin-bottom: 18px;
  position: relative;

  .subtitle {
    font-size: 20px;
    margin-top: 3px;
  }

  @include breakpoint($md) {
    margin-bottom: 30px;
    &:not(.special) {
      width: 47%;
      margin-top: -30px;

      &:nth-child(odd) {
        margin-top: 30px;
        transform: translate(0px,30px);
      }

    }
  }

  .card-content {
    background: rgba(white, 0.1);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;

    span {
      display: block;
      margin-bottom: 10px;
    }

    button {
      font-family: $font-primary;
    }
  }

  &.special {
    .card-content {
      font-family: $font-primary;
      position: static;
      font-size: 20px;
      line-height: 1;
      text-align: right;
      color: $color-emphasis;
      background-color: white;
    }
  }
}

.canvas-left {
  order: -1;

  @include breakpoint($sm) {
    width: 30%;
    margin-top: 30px;
  }

  @include breakpoint($md) {
    width: 22%;
    margin-top: 30px;
  }

  .fixed {
    @include breakpoint($sm) {
      position: fixed;
      margin-left: 5%;
      width: 30%;
    }

    @include breakpoint($md) {
      width: 22%;
    }
  }

}

.canvas-feed {
  order: 1;

  @include breakpoint($sm) {
    width: 60%;
    margin-left: 37.5%;
    margin-top: 15px;
  }

  @include breakpoint($md) {
    margin-left: 27.5%;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 60px;
    width: 55%;
  }

  .cart-icon {
    margin-left: 10px;
  }
}

.flexcontainer {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    align-items: stretch;
}
</style>
