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
        <p class="text-gray-500 font-semibold">Qty {{ product.quantity }}</p>

        <div class="flex">
          <button
            @click="remove(product)"
            type="button"
            class="font-medium text-gray-600 hover:text-gray-500  transition transform hover:-translate-y-0.5"
          >
            <i class="fas fa-trash-alt text-red-600 text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatNumber } from "@/utils/helpers";
import { mapActions } from 'vuex';
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
  },
  methods:{
    ...mapActions({
      remove: 'removeProduct'
    })
  }
}
</script>