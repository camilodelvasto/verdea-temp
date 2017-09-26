import Vuex from 'vuex'
import Vue from 'vue'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cart: {
        total: 0,
        qty: 0,
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
          updateItemsInCart(state)
        }
      },
      removeFromCart (state, item) {
        let products = state.cart.products
        let productId = ''
        if (item.sys !== undefined) {
          productId = item.sys.id
        } else {
          productId = item
        }

        if (products[productId] !== undefined) {
          Vue.delete(products, productId)
          updateItemsInCart(state)
        }
      },
      plusOne (state, productId) {
        let products = state.cart.products
        if (products[productId].qty < 10) {
          products[productId].qty++
        }
        updateItemsInCart(state)
      },
      minusOne (state, productId) {
        let products = state.cart.products

        if (products.hasOwnProperty(productId)) {
          if (products[productId].qty > 1) {
            products[productId].qty--
          }
          updateItemsInCart(state)
        }
      },
      setNumberOfItems (state, payload) {
        let products = state.cart.products
        products[payload.productId].qty = payload.amount
        updateItemsInCart(state)
      }
    }
  })

  function updateItemsInCart (state) {
    var obj = state.cart.products
    var priceTotal = 0
    var qtyTotal = 0
    Object.keys(obj).map(function (key) {
      priceTotal += obj[key].fields.price * obj[key].qty
      qtyTotal += obj[key].qty
    })
    state.cart.total = priceTotal
    state.cart.qty = qtyTotal
  }
}

export default createStore
