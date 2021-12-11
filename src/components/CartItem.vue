<template>
  <div class="py-6 flex">
    <div
      class="
        flex-shrink-0
        w-24
        h-24
        border border-gray-200
        rounded-md
        overflow-hidden
      "
    >
      <img
        :src="product.photo"
        :alt="product.photo"
        class="w-full h-full object-center object-cover"
      />
    </div>

    <div class="ml-4 flex-1 flex flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            {{ product.name }}
          </h3>
          <p class="ml-4">
            {{ formatNumber(product.price) }}
          </p>
        </div>
      </div>
      <div class="flex-1 flex items-end justify-between text-sm">
        <p class="text-gray-500">Qty {{ product.quantity }}</p>

        <div class="flex">
          <button
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatNumber } from "@/utils/helpers";
export default {
  name: "cartItem",
  props:{
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formatNumber
    }
  }
}
</script>