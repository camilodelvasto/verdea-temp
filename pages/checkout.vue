<template>
  <div class="index checkout">
    <div class="modal"
      v-bind:class="{ 'is-active': showingModal }"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img v-bind:src="img">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="closeModalImage()"></button>
    </div>
    <div class="page-wrapper">
      <Navigation />
      <section class="section" v-if="itemsInCart !== 0">
        <div class="container">
          <h2>Resumen de compra</h2>

          <div class="table columns is-mobile table-header">
            <div class="column hide-mobile"></div>
            <div class="column"></div>
            <div class="column">Cantidad</div>
            <div class="column">Precio</div>
          </div>

          <div class="table columns is-mobile" v-for="product in $store.state.cart.products" track-by="$index">
            <div class="column hide-mobile">
              <figure class="item-image">
                <a v-on:click="openModal(product.fields.picture.fields.file.url)">
                  <img v-bind:src="product.fields.picture.fields.file.url" >
                </a>
              </figure>
            </div>
            <div class="column item-title hide-mobile">{{ product.fields.name }}</div>
            <div class="column hide-desktop">
              <a v-on:click="openModal(product.fields.picture.fields.file.url)">{{ product.fields.name }}</a>
            </div>

            <div class="column">
              <div class="item-qty">
                <button class="button" v-on:click="$store.commit('minusOne', product.id)">-</button>
                {{ product.qty}}
                <button class="button" v-on:click="$store.commit('plusOne', product.id)">+</button>
                <br>
                <a class="" @click="$store.commit('removeFromCart', product.id)">Remover</a>
              </div>
            </div>
            <div class="column">{{ product.fields.price }}</div>
          </div>
          <div class="table columns is-mobile table-footer">
            <div class="column hide-mobile"></div>
            <div class="column hide-mobile"></div>
            <div class="column align-right is-two-thirds-mobile">Total por {{ itemsInCart }} productos:</div>
            <div class="column">{{ cartTotal }}</div>
          </div>

          <form method="post" action="https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.run.webtask.io/verdea-place-order">
            <button type="submit">checkout</button>
            <input name="amount" type="hidden" value="$store.state.shoppingBag" />
          </form>
        </div>
      </section>

      <section class="section" v-else>
        <div class="container">
          <h2>No hay productos en el carrito de compras</h2>
          <p>Regresa al <nuxt-link to="/">inicio</nuxt-link> para ver los productos disponibles.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  data () {
    return {
      showingModal: false,
      img: ''
    }
  },
  computed: {
    itemsInCart () {
      return this.$store.state.cart.qty
    },
    cartTotal () {
      return this.$store.state.cart.total
    }
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
  }
}
</script>

<style scoped lang="scss">
.section {
  padding: 0;
}
.item-qty {
  .button {
    font-size:10px;
    margin: 0 2px;
    font-weight: bold;
  }
}
.modal {
  z-index: 12000;
}

.table {
  &.table-header {
    font-weight: bold;
    border-bottom: 1px solid $color-gray;
  }
  &.table-footer {
    font-weight: bold;
    border-top: 1px solid $color-gray;
  }

  .column {
    &.hide-mobile {
      display: none;

      @include breakpoint($bulma) {
        display: block;
      }
    }
    &.hide-desktop {
      display: block;

      @include breakpoint($bulma) {
        display: none;
      }
    }
  }

  .align-right {
    @include breakpoint($bulma) {
      text-align: right;
    }
  }
}
</style>
