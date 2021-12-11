<template>
  <section class="w-full h-full my-6 px-4">
    <!-- products -->
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <!-- product item -->
      <transition-group name="products">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex flex-col text-justify bg-gray-300 rounded-md shadow-lg relative"
        >
          <span
            class="absolute left-2 top-2 w-6 h-6 flex justify-center items-center rounded-full bg-gray-900 border-none outline-none text-indigo-600 shadow-lg"
            >{{ product.stock }}</span
          >
          <img
            :src="product.photo"
            class="p-2 rounded-md w-full h-full"
            alt=""
          />
          <h4 class="text-center font-medium text-gray-700">
            {{ product.name }}
          </h4>
          <div class="flex items-center justify-around my-3">
            <span class="font-semibold text-gray-900">{{
              formatNumber(product.price)
            }}</span>
            <button
              @click="addToCart(product)"
              :id="'product' + product.id"
              type="button"
              class="bg-blue-400 px-5 py-1 font-sans text-white rounded-md transition-all duration-200 ease-in-out hover:bg-blue-400 transform hover:scale-105"
            >
              Add
            </button>
            <div :id="'product+' + product.id" class="hidden rounded-md">
              <button  @click="$store.dispatch('decrementQuantity', product)" class="bg-gray-200 px-2 rounded-l-md font-semibold py-1">
                -
              </button>
              <span
                class="text-gray-800 font-semibold bg-gray-100 px-2 py-1 border border-gray-200"
                >0</span
              >
              <button
                @click="$store.dispatch('addProductToCart', product)"
                class="bg-gray-200 px-2 rounded-r-md font-semibold py-1"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </transition-group>
      <!-- ./product item -->
    </div>
    <!-- ./products -->
  </section>
</template>

<script>
import { formatNumber } from '@/utils/helpers'
export default {
  name: 'ProductsGrid',
  data() {
    return {
      formatNumber,
      isAdded: false,
    }
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts
    },
  },
  methods: {
    addToCart(product) {
      document.getElementById(`product${product.id}`).classList.toggle('hidden')
      document
        .getElementById(`product+${product.id}`)
        .classList.remove('hidden')
      document.getElementById(`product+${product.id}`).classList.remove('flex')
      if (product) {
        this.$store.dispatch('addProductToCart', product)
      }
    },
  },
}
</script>

<style scoped>
.products-enter-active,
.products-leave-active {
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
}
.products-enter-from,
.products-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
