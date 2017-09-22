import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      products: {}
    },
    mutations: {
      addToCart (state, item) {
        let cart = state.products
        let productId = item.sys.id
        if (cart[productId] !== undefined) {
          cart[productId].qty++
        } else {
          cart[productId] = {}
          cart[productId].fields = item.fields
          cart[productId].id = productId
          cart[productId].qty = 1
        }
        state.counter++
      },
      removeFromCart (state, item) {
        let cart = state.products
        let productId = item.sys.id
        if (cart[productId] !== undefined) {
          if (cart[productId].qty === 1) {
            delete cart[productId]
          } else {
            cart[productId].qty--
          }
          state.counter--
        }
      },
      plusOne (state, productId) {
        state.products[productId].qty++
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
