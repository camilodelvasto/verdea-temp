<template>
  <div class="index checkout">
    <div class="modal"
      v-bind:class="{ 'is-active': showingModal }"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image">
          <img v-bind:src="img">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="closeModalImage()"></button>
    </div>
    <div class="page-wrapper">
      <Navigation />
      <section class="section" v-if="itemsInCart !== 0">
        <div class="container cart-wrapper">
          <div class="table-wrapper">
            <h2>Carrito de compras</h2>
            <div class="table columns gapless is-mobile table-header">
              <div class="column hide-mobile"></div>
              <div class="column"></div>
              <div class="column c-center">Cantidad</div>
              <div class="column price">Precio</div>
            </div>

            <div class="table-content-wrapper">
              <div class="table columns gapless is-mobile table-body" v-for="product in $store.state.cart.products" track-by="$index">
                <div class="column hide-mobile">
                  <figure class="item-image">
                    <a v-on:click="openModal(product.fields.picture.fields.file.url)">
                      <img v-bind:src="product.fields.picture.fields.file.url" >
                    </a>
                  </figure>
                </div>
                <div class="column item-title hide-mobile">
                  {{ product.fields.name }}
                </div>
                <div class="column hide-desktop">
                  <a v-on:click="openModal(product.fields.picture.fields.file.url)">{{ product.fields.name }}</a>
                </div>
                <div class="column c-qty">
                  <div class="item-qty">
                    <button class="button" v-on:click="$store.commit('minusOne', product.id)">-</button>
                    {{ product.qty}}
                    <button class="button" v-on:click="$store.commit('plusOne', product.id)">+</button>
                  </div>
                </div>
                <div class="column price">
                  {{ product.fields.price | currency }}
                  <br>
                  <a class="remove-from-cart" @click="$store.commit('removeFromCart', product.id)">Remover</a>
                </div>
              </div>
              <div class="table columns gapless is-mobile table-footer">
                <div class="column align-right is-half-mobile is-three-quarters-desktop">Total ({{ itemsInCart }} productos):</div>
                <div class="column price">{{ cartTotal | currency }}</div>
              </div>
            </div>
          </div>

          <div class="summary-wrapper">
            <div class="summary-box">
              <h3>Resumen</h3>
              <p>Número de ítems: <span>{{ itemsInCart }}</span></p>
              <p>Total: <span class="total-red">{{ cartTotal | currency }}</span></p>
              <form method="post" action="https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.run.webtask.io/verdea-place-order">
                <button class="button is-warning" type="submit">Procesar pedido</button>
                <input name="amount" type="hidden" value="$store.state.shoppingBag" />
              </form>
              <span class="notice">
                *Costo de envío para Bogotá: $6.000.<br>
                Envíos gratis en Bogotá por pedidos mayores a $60.000.
              </span>
            </div>
          </div>
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
  },
  filters: {
    currency: function (value) {
      return '$' + value.toLocaleString('es-CO')
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  padding: 0;
}
.modal {
  z-index: 12000;

  .modal-content {
    margin: 0;
  }
}

.c-qty {
  display: flex;

  .item-qty {
    flex: 1;
    align-self: center;
    text-align: center;
    justify-content: space-evenly;
    display: flex;

    @include breakpoint($bulma) {
      align-self: flex-start;
    }

    .button {
      width: 25px;
      font-size: 12px;

      @include breakpoint($bulma) {
        font-weight: bold;
      }
    }
  }
}

.cart-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;

  @include breakpoint($bulma) {
    flex-direction: row;
  }

  .table-wrapper {
    @include breakpoint($bulma) {
      width: 60%;
    }
  }

  .summary-wrapper {
    @include breakpoint($bulma) {
      padding-left: 100px;
      width: 40%;
      position: relative;
    }

    .summary-box {
      margin-top: 20px;
      padding: 20px;
      background: white;
      border: 1px solid $color-gray;
      border-radius: 5px;
      margin-bottom: 30px;

      @include breakpoint($bulma) {
        position: fixed;
        margin-top: 40px;
      }

      p {
        display: flex;
        justify-content: space-evenly;
        font-size: 16px;
        margin-bottom: 5px;

        @include breakpoint($bulma) {
          display: block;
        }
      }

      .notice {
        font-size: 10px;
        line-height: 1.1;
        display: block;
        margin-top: 10px;
      }

      span {
        font-weight: bold;

        @include breakpoint($bulma) {
          float: right;
        }

        &.total-red {
          color: red;
        }
      }

      form {
        margin-top: 10px;

        button {
          display: block;
          width: 100%;
        }
      }
    }
  }

}

.table-body {
  padding-bottom: 10px;
}

.column {
  text-align: left;

  &.c-center {
    text-align: center;
  }

  &.price {
    text-align: right;
  }
}

.table-content-wrapper {
  padding: 15px 0;
}

.remove-from-cart {
  font-size: 10px;
}

.table {
  background: transparent;

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
