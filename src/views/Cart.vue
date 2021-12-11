<template>
    <!-- cart -->
    <div>
      <TransitionRoot as="template" :show="open">
        <Dialog
          as="div"
          class="fixed inset-0 overflow-hidden"
          @close="openCart(false)"
        >
          <div class="absolute inset-0 overflow-hidden">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-500"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay
                class="
                  absolute
                  inset-0
                  bg-gray-500 bg-opacity-75
                  transition-opacity
                "
              />
            </TransitionChild>

            <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <div class="w-screen max-w-md">
                  <div
                    class="
                      h-full
                      flex flex-col
                      bg-white
                      shadow-xl
                      overflow-y-scroll
                    "
                  >
                    <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          Shopping cart
                        </DialogTitle>
                        <div class="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            @click="openCart(false)"
                          >
                            <span class="sr-only">Close panel</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <div class="-my-6 divide-y divide-gray-200">
                            <CartItem
                              v-for="product in products"
                              :key="product.id"
                              :product="product"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div
                        class="
                          flex
                          justify-between
                          text-base
                          font-medium
                          text-gray-900
                        "
                      >
                        <p>Subtotal</p>
                        <p>{{ formatNumber(total) }}</p>
                      </div>

                      <div class="mt-6">
                        <a
                          href="#"
                          class="
                            flex
                            justify-center
                            items-center
                            px-6
                            py-3
                            border border-transparent
                            rounded-md
                            shadow-sm
                            text-base
                            font-medium
                            text-white
                            bg-indigo-600
                            hover:bg-indigo-700
                          "
                          >Checkout</a
                        >
                      </div>
                      <div
                        class="
                          mt-6
                          flex
                          justify-center
                          text-sm text-center text-gray-500
                        "
                      >
                        <p>
                          or
                          <button
                            type="button"
                            class="
                              text-indigo-600
                              font-medium
                              hover:text-indigo-500
                            "
                            @click="openCart(false)"
                          >
                            Continue Shopping<span aria-hidden="true">
                              &rarr;</span
                            >
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
    <!-- cart -->
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import { formatNumber } from "@/utils/helpers";

export default {
  name: "Cart",
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CartItem,
  },
  data() {
    return {
      formatNumber,
    };
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal",
    }),
    ...mapState({
      open: "open",
    }),
  },
  methods: {
    ...mapMutations({
      openCart: "openCart",
    }),
  },
};
</script>
