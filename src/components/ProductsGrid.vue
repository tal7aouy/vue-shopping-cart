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
              type="button"
              class="bg-blue-500 px-4 py-1 text-white rounded-md transition-all duration-200 ease-in-out hover:bg-blue-400 font-serif transform hover:scale-105"
            >
              Add
            </button>
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
    }
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts
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
