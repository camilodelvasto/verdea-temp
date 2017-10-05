<template>
  <div class="index checkout">
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
          <p class="notice-alt">*La planta se entrega con plato y una bolsa.</p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="closeModalImage()"></button>
    </div>
    <div class="modal"
      v-bind:class="{ 'is-active': showingCheckoutForm }"
    >
      <div class="modal-background white-bg"></div>
      <div class="modal-content checkout-form">
        <h3>Datos personales</h3>
        <p class="intro">Por favor introduzca sus datos personales. Luego será redirigido a la plataforma de pagos para completar el pedido.</p>
        <form method="post" action="https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.run.webtask.io/verdea-place-order">
          <input name="cartTotal" type="hidden" :value="cartTotal" />
          <input name="itemsInCart" type="hidden" :value="itemsInCart" />
          <input name="cartProducts" type="hidden" :value="cartProducts" />
          <input name="shippingCountry" type="hidden" value="COL" />

          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input class="input" type="text" name="buyerFullName" placeholder="Nombre completo" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" name="payerEmail" placeholder="Email" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Dirección de envío</label>
            <div class="control">
              <input class="input" type="text" name="shippingAddress" placeholder="Dirección" required>
            </div>
            <p class="help">Por favor incluya apartamento/interior</p>
          </div>
          <div class="field">
            <label class="label">Teléfono</label>
            <div class="control">
              <input class="input" type="text" name="telephone" placeholder="" required>
            </div>
            <p class="help">Por favor incluya apartamento/interior</p>
          </div>
          <div class="field">
            <label class="label">Ciudad</label>
            <div class="control">
              <input class="input readonly" type="text" name="shippingCity" placeholder="Bogotá" value="Bogota" readonly>
            </div>
            <p class="help">Por ahora sólo hacemos envíos en Bogotá</p>
          </div>

          <button class="button is-warning" type="submit">Procesar pedido</button>
        </form>
        <span class="notice">
          *Costo de envío para Bogotá: $6.000.<br>
          Envíos gratis en Bogotá por pedidos mayores a $60.000.
        </span>

      </div>
      <button class="modal-close is-large dark-bg" aria-label="close" v-on:click="closeCheckoutForm()"></button>
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
                    <a v-on:click="openModal(product)">
                      <img v-bind:src="product.fields.picture.fields.file.url" >
                    </a>
                  </figure>
                </div>
                <div class="column item-title hide-mobile">
                  {{ product.fields.name }}
                </div>
                <div class="column hide-desktop">
                  <a v-on:click="openModal(product)">{{ product.fields.name }} <br><span class="notice">(Ver producto)</span></a>
                </div>
                <div class="column c-qty">
                  <div class="item-qty">
                    <button class="button button-minus" v-on:click="$store.commit('minusOne', product.id)"
                            :disabled="product.qty <= 1">
                      <svg style="width:12px;height:12px" viewBox="0 0 24 24">
                        <path d="M19,13H5V11H19V13Z" />
                      </svg>
                    </button>
                    <span>{{ product.qty}}</span>
                    <button class="button button-plus" v-on:click="$store.commit('plusOne', product.id)"
                            :disabled="product.qty >= 10">
                      <svg style="width:12px;height:12px" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                      </svg>
                    </button>
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
              <p>Subtotal: <span class="">{{ cartTotal | currency }}</span></p>
              <div v-if="cartTotal < 60000">
                <p>Envío: <span class="">{{ 6000 | currency }}</span></p>
                <p>Total: <span class="total-red">{{ cartTotal + 6000 | currency }}</span></p>
              </div>
              <div v-else>
                <p>Envío: <span class="">{{ 0 | currency }}</span></p>
                <p>Total: <span class="total-red">{{ cartTotal | currency }}</span></p>
              </div>
              <button class="button is-warning" v-on:click="openCheckoutForm()">Procesar pedido</button>
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
import CartIcon from '~/components/CartIcon.vue'

export default {
  components: {
    Navigation,
    CartIcon
  },
  data () {
    return {
      showingModal: false,
      showingCheckoutForm: false,
      product: {},
      scrollTop: 0
    }
  },
  mounted () {
    var vm = this
    vm.closeModalImage()
  },
  computed: {
    itemsInCart () {
      return this.$store.state.cart.qty
    },
    cartTotal () {
      return this.$store.state.cart.total
    },
    cartProducts () {
      return JSON.stringify(this.$store.state.cart.products)
    }
  },
  methods: {
    isInCart (productId) {
      return this.$store.state.cart.products[productId] !== undefined
    },
    openModal (product) {
      var vm = this
      vm.product = product
      vm.scrollTop = document.body.scrollTop
      vm.openModalImage()
    },
    closeModalImage () {
      var vm = this
      vm.showingModal = false
      document.body.classList.remove('modal-open')
      document.body.scrollTop = vm.scrollTop
    },
    openModalImage () {
      var vm = this
      vm.showingModal = true
      setTimeout(function () {
        document.body.classList.add('modal-open')
      }, 300)
    },
    closeCheckoutForm () {
      var vm = this
      document.body.classList.remove('modal-open')
      vm.showingCheckoutForm = false
    },
    openCheckoutForm () {
      var vm = this
      document.body.classList.add('modal-open')
      vm.showingCheckoutForm = true
    }
  },
  filters: {
    currency: function (value) {
      if (value !== undefined) return '$' + value.toLocaleString('es-CO')
    }
  }
}
</script>

<style scoped lang="scss">
.section {
  padding: 0;
}

.c-qty {
  display: flex;

  .item-qty {
    flex: 1;
    align-self: center;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    background: white;
    height: 35px;

    @include breakpoint($bulma) {
      align-self: flex-start;
    }

    span {
      align-self: center;
      flex: 1;
      width: 40px;
      font-size: 16px;
      height: 100%;
      border-top: 1px solid $color-medium-gray;
      border-bottom: 1px solid $color-medium-gray;
      display: flex;
      align-items: center;
      justify-content: center;

      @include breakpoint($bulma) {
        width: 50px;
      }
    }

    .button {
      border: 1px solid $color-medium-gray;
      height: 100%;
      svg {
        path {
          fill: $color-medium-gray;
        }
      }

      &:hover {
        svg {
          path {
            fill: $color-dark-gray;
          }
        }
      }

      &:disabled {
        svg {
          path {
            fill: $color-gray;
          }
        }        
      }

      &.button-plus {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &.button-minus {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
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
      display: flex;
      flex-direction: column;

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
          flex: 1;
          display: flex;
          justify-content: space-between;
        }
      }

      span {
        font-weight: bold;

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
