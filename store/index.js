import Vuex from 'vuex'
import Vue from 'vue'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cart: {
        total: 0,
        items: 0,
        products: {}
      }
    },
    mutations: {
      addToCart (state, item) {
        let products = state.cart.products
        let productId = item.sys.id
        let newItem = {}

        if (products[productId] !== undefined) {
          // item is already in cart, do nothing
        } else {
          newItem.fields = item.fields
          newItem.id = productId
          newItem.qty = 1
          Vue.set(products, productId, newItem)
        }
      },
      removeFromCart (state, item) {
        let products = state.cart.products
        let productId = item.sys.id

        if (products[productId] !== undefined) {
          Vue.delete(products, productId)
        }
      },
      plusOne (state, productId) {
        let products = state.cart.products
        products[productId].qty++
        console.log(products)
      },
      minusOne (state, productId) {
        let products = state.cart.products

        if (products.hasOwnProperty(productId)) {
          if (products[productId].qty > 1) {
            products[productId].qty--
          } else {
            Vue.delete(products, productId)
          }
        }
      }
    },
    computed: {
      count () {
        return this.$store.state.products
      }
    }
  })
}

export default createStore
