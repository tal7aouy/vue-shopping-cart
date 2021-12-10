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
  },
  actions: {},
  modules: {},
})
