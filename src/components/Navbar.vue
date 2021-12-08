<template>
  <nav class="flex items-center justify-between flex-wrap p-4 bg-gray-900">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <h2 class="font-semibold text-xl tracking-tight text-indigo-400">
        Vue <span class="text-indigo-600">Cart</span>
      </h2>
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-sm sm:flex-grow">
        <router-link
          to="/"
          class="font-semibold no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4 items-center"
        >
          <i class="fas fa-home mr-1"></i>Home
        </router-link>
        <router-link
          to="/cart"
          class="font-semibold no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          <i class="fas fa-cart-plus mr-1"></i>Cart
        </router-link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by ..."
          class="no-underline inline-block text-sm px-4 py-3 leading-none rounded text-white bg-gray-800 focus:bg-gray-600 mt-4 sm:mt-0 border-none"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const open = ref(false)
    function toggle() {
      open.value = !open.value
    }
    return { toggle, open }
  },
}
</script>
<style scoped>
a.router-link-exact-active {
  color: rgba(79, 70, 229, 0.6);
}
</style>
