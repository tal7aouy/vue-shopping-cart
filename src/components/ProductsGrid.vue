<template>
  <section class="w-full h-full my-6 px-4">
    <!-- products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <!-- product item -->
      <transition-group name="products">
        <ProductItem  v-for="product in products"
          :key="product.id" :product="product"/>
      </transition-group>
      <!-- ./product item -->
    </div>
    <!-- ./products -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from '@/components/ProductItem.vue'
export default {
  name: "ProductsGrid",
  components:{
    ProductItem
  },

  computed: {
    ...mapGetters({
      products: "availableProducts",
    }),
   
  },
  
};
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
