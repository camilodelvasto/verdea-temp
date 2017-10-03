<template>
  <div class="index">
    <div class="modal"
      v-bind:class="{ 'is-active': showingModal }"
    >
      <div class="modal-background" v-on:click="closeModalImage()"></div>
      <div class="modal-content" v-if="product.fields !== undefined">
        <div class="image">
          <img v-bind:src="product.fields.picture.fields.file.url">
        </div>
        <div class="contents">
          <h3>{{ product.fields.name }}</h3>
          <p>{{ product.fields.description }}</p>
          <div class="content-flex">
            <div class="card-price">
              {{ product.fields.price | currency }}
            </div>
            <div class="card-cart">
              <button class="button add-to-cart"
                      @click="$store.commit('addToCart', product)"
                      v-if="!isInCart(product.sys.id)"
              >
                <div class="buy-now">Comprar</div>
                <CartIcon/>
              </button>
              <nuxt-link to="/checkout" class="button add-to-cart go-to-checkout is-active-icon"
                      v-else
              >
                <div class="buy-now">Ir a pagar</div>
                <CartIcon/>
              </nuxt-link>
            </div>
          </div>
        </div>
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
                <a v-on:click="openModal(product)">
                  <img v-bind:src="product.fields.picture.fields.file.url" >
                </a>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h3>{{ product.fields.name }}</h3>
                  <div class="content-flex">
                    <div class="card-price">
                      {{ product.fields.price | currency }}
                    </div>
                    <div class="card-cart">
                      <button class="button add-to-cart"
                              @click="$store.commit('addToCart', product)"
                              v-if="!isInCart(product.sys.id)"
                      >
                        <div class="buy-now">Comprar</div>
                        <CartIcon/>
                      </button>
                      <nuxt-link to="/checkout" class="button add-to-cart go-to-checkout is-active-icon"
                              v-else
                      >
                        <div class="buy-now">Ir a pagar</div>
                        <CartIcon/>
                      </nuxt-link>
                    </div>
                  </div>
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
      product: {}
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
    openModal (product) {
      var vm = this
      vm.product = product
      vm.openModalImage()
    },
    closeModalImage () {
      var vm = this
      vm.showingModal = false
      document.body.classList.remove('modal-open')
    },
    openModalImage () {
      var vm = this
      vm.showingModal = true
      document.body.classList.add('modal-open')
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
    color: $color-text;
    bottom: 0;
    width: 100%;
    padding: 13px 0;

    h3 {
      color: $color-text;
      font-weight: normal;
    }
  }

  &.special {
    .card-content {
      font-family: $font-primary;
      position: static;
      font-size: 20px;
      line-height: 1.2;
      text-align: right;
      color: $color-emphasis;
      background-color: white;
    }
  }
}

.content-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  color: $color-dark-gray;
  font-style: italic;
}

.card-cart {
  display: flex;
  flex-direction: column;
}

button {
  font-family: $font-primary;
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
}

.add-to-cart {
  display: flex;
  align-items: center;

  .buy-now {
    align-self: flex-start;
    margin-right: 10px;
  }

  &.go-to-checkout {
    display: flex;
    align-items: end;
    background: $color-emphasis;
    color: white;
  }
}

.remove-from-cart {
  background: $color-emphasis;
}

.flexcontainer {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    align-items: stretch;
}
</style>
