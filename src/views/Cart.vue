<template>
  <app-layout>
    <template #header>
      <Navbar />
    </template>
  </app-layout>
</template>

<script>
// @ is an alias to /src
import AppLayout from '@/components/layout/AppLayout.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Cart',
  components: { AppLayout, Navbar },
}
</script>
