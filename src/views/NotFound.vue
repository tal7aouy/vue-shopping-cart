<template>
  <section class="bg-gray-800 h-screen">
    <div class="flex items-center justify-center py-12">
      <div
        class="bg-transparent rounded-md flex items-center justify-center mx-4 md:w-2/3"
      >
        <div class="flex flex-col items-center py-16">
          <img
            class="px-4 hidden md:block"
            src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
          />
          <img
            class="md:hidden"
            src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
          />
          <h1
            class="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-200"
          >
            OOPS!
          </h1>
          <p
            class="px-4 pb-10 text-base leading-none text-center text-gray-600"
          >
            No signal here! we cannot find the page you are looking for
          </p>
          <router-link
            to="/"
            class="mx-4 px-4 py-2 rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800"
          >
            <i class="fas fa-chevron-left"></i> Go Home
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped></style>
