import { createStore } from 'vuex'
import { data } from '@/utils/data'

export default createStore({
  state: {
    search: '',
    cart: [],
    products: data,
    open: false,
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
      if (cartItem.quantity >0) {
        cartItem.quantity--
      } else {
        state.cart = state.cart.filter((item) => item.id !== cartItem.id)
      }
    },
    openCart(state, payload) {
      state.open = payload
    },
   removeCartItem(state,product) {
    // remove product from cart
    state.cart = state.cart.filter((item) => item.id !== product.id)
    const item = state.products.find(item => item.id === product.id)
    if(item) {
      // add product's quantity removed to stock
      item.stock += product.quantity
    }
    
   }
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
      return state.cart.map((cartItem) => {
        const product = state.products.find(
          (product) => product.id === cartItem.id
        )
        return {
          id: cartItem.id,
          name: product.name,
          price: product.price,
          photo: product.photo,
          quantity: cartItem.quantity,
        }
      })
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => (total += product.price * product.quantity),
        0
      )
    },
    
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
      if (cartItem) {
        // decrement quantity
        commit('decrementCartProductQuantity', cartItem)
        product.stock++
      } 
    },
    removeProduct({commit},product) {
      if (product) {
        commit('removeCartItem',product)
      }
    },
  
  },
  modules: {},
})
