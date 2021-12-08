<template>
  <div class="w-full">
    <slot name="header"></slot>
  </div>
  <main class="w-full">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'AppLayout',
}
</script>
