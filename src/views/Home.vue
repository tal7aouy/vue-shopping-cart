<template>
  <app-layout>
    <template #header>
      <Navbar />
    </template>
    <products-grid />
  </app-layout>
</template>

<script>
// @ is an alias to /src
import AppLayout from '@/components/layout/AppLayout.vue'
import Navbar from '@/components/Navbar.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'
export default {
  name: 'Home',
  components: { AppLayout, Navbar, ProductsGrid },
}
</script>
