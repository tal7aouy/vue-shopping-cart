<template>
     <div
         
          class="
            flex flex-col
            text-justify
            bg-gray-300
            rounded-md
            shadow-lg
            relative
          "
        >
          <span
            class="
              absolute
              left-2
              top-2
              w-6
              h-6
              flex
              justify-center
              items-center
              rounded-full
              bg-gray-900
              border-none
              outline-none
              text-indigo-600
              shadow-lg
            "
            >{{ product.stock }}</span
          >
          <img
            :src="product.photo"
            class="p-2 rounded-md w-full h-full"
            alt=""
          />
          <h4
            class="text-center text-sm md:text-base font-medium text-gray-700"
          >
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
              class="
                bg-blue-400
                px-5
                py-1
                font-sans
                text-white
                rounded-md
                transition-all
                duration-200
                ease-in-out
                hover:bg-blue-400
                transform
                hover:scale-105
              "
            >
              Add
            </button>
            <div :id="'product+' + product.id" class="hidden rounded-md">
              <button
                @click="decrementQuantity(product)"
                class="bg-gray-200 px-2 rounded-l-md font-semibold py-1"
              >
                -
              </button>
              <span
             
                class="
                  text-gray-800
                  font-semibold
                  bg-gray-100
                  px-2
                  py-1
                  border border-gray-200
                "
                ></span
              >
              <button
                @click="incrementQuantity(product)"
                class="bg-gray-200 px-2 rounded-r-md font-semibold py-1"
              >
                +
              </button>
            </div>
          </div>
        </div>
</template>

<script>
import { formatNumber } from "@/utils/helpers";
export default {
  name: "Product",
  props: {
    product:{
      type: Object,
      requird: true
    }
  },
    data() {
    return {
      formatNumber,
    };
  },
  methods: {
    toggleButtons(product) {
      document
        .getElementById(`product${product.id}`)
        .classList.toggle("hidden");
      document
        .getElementById(`product+${product.id}`)
        .classList.remove("hidden");
      document.getElementById(`product+${product.id}`).classList.remove("flex");
    },
    addToCart(product) {
      // toggle from add button to -0+ buttons
      this.toggleButtons(product)
      // push product to cart
      if (product) {
        this.$store.dispatch("addProductToCart", product);
      }
    },
    decrementQuantity(product) {
      if (product) {
        this.$store.dispatch("decrementQuantity", product);
      }
    },
    incrementQuantity(product) {
      if (product) {
        this.$store.dispatch("addProductToCart", product);
      }
    },
  },
}
</script>