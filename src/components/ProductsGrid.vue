<template>
  <section class="w-full h-full my-6 px-4">
    <!-- products -->
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <!-- product item -->
      <div
        v-for="(item, index) of items"
        :key="index"
        class="flex flex-col text-justify bg-gray-300 rounded-md shadow-lg"
      >
        <img src="/img/1.jpg" class="p-2 rounded-md" alt="" />
        <h4 class="text-center font-medium text-gray-700">T-shirt InHale</h4>
        <div class="flex items-center justify-around my-3">
          <span class="font-semibold text-gray-900">{{
            formatNumber(20)
          }}</span>
          <button
            @click="changeState"
            type="button"
            class="bg-indigo-500 px-4 py-1 text-white rounded-md transition-all duration-200 ease-in-out hover:bg-indigo-700 font-serif transform hover:scale-105"
          >
            Add
          </button>
        </div>
      </div>
      <!-- ./product item -->
    </div>
    <!-- ./products -->
  </section>
</template>

<script>
import { ref } from 'vue'
import { formatNumber } from '@/utils/helpers'
export default {
  name: 'ProductsGrid',
  setup() {
    const items = ref(10)
    return { items, formatNumber }
  },
}
</script>

<style></style>
