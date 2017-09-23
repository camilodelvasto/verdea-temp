import Vuex from 'vuex'
import Vue from 'vue'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      products: {},
      shoppingBag: {}
    },
    mutations: {
      addToCart (state, item) {
        let cart = state.products
        let productId = item.sys.id
        if (cart[productId] !== undefined) {
          state.shoppingBag[productId]++
        } else {
          cart[productId] = {}
          cart[productId].fields = item.fields
          cart[productId].id = productId
          Vue.set(state.shoppingBag, productId, 1)
        }
        state.counter++
      },
      removeFromCart (state, item) {
        let cart = state.products
        let productId = item.sys.id
        if (cart[productId] !== undefined) {
          if (cart[productId].qty === 1) {
            delete cart[productId]
            delete state.shoppingBag[productId]
          } else {
            state.shoppingBag[productId]--
          }
          state.counter--
        }
      },
      plusOne (state, productId) {
        state.shoppingBag[productId]++
      },
      minusOne (state, productId) {
        if (state.shoppingBag[productId] > 0) {
          state.shoppingBag[productId]--
        } else {
          Vue.delete(state.products, productId)
          Vue.delete(state.shoppingBag, productId)
        }
        console.log(state.shoppingBag)
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
