import { createStore } from 'vuex'
import { data } from '@/utils/data'

export default createStore({
  state: {
    search: '',
    cart: [],
    products: data,
  },
  mutations: {
    setSearch(state, payload) {
      state.search = payload
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      })
    },
    IncrementProductQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decrementProductStock(state, product) {
      if (product.stock > 0) {
        product.stock--
      }
    },
    // decrement product quantity in cart
    decrementCartProductQuantity(state, cartItem) {
      if (cartItem) {
        cartItem.quantity--
        
      }
    },
  },
  getters: {
    availableProducts(state) {
      return state.products.filter((product) => {
        return (
          product.stock > 0 &&
          product.name.toLowerCase().includes(state.search.toLowerCase())
        )
      })
    },
    cartProducts(state) {
      return state.cart.map(cartItem=> {
        const product = state.products.find(product=> product.id === cartItem.id)
        return {
          name: product.name,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
      }
  },
  actions: {
    addProductToCart({ state, commit }, product) {
      if (product.stock > 0) {
        const cartItem = state.cart.find((item) => item.id === product.id)
        if (!cartItem) {
          commit('pushProductToCart', product.id)
        } else {
          commit('IncrementProductQuantity', cartItem)
        }
        commit('decrementProductStock', product)
      }
    },
    decrementQuantity({ state, commit }, product) {
      const cartItem = state.cart.find((item) => item.id === product.id)
      // if product exist in cart
      if (cartItem.quantity > 0) {
        // decrement quantity
        commit('decrementCartProductQuantity', cartItem)
        product.stock++
      } 
    },
  },
  modules: {},
})
