<template>
  <div data-theme="synthwave">
    <Navbar />
  </div>
  <span data-theme="synthwave">
    <div class="pt-6 pb-6">
      <router-view />
    </div>
  </span>
  <span data-theme="synthwave">
    <Footer />
  </span>
</template>
<style>
  html {
    scroll-behavior: smooth;
  }
</style>
<script>
  import Navbar from '@/components/NavbarView.vue'
  import Footer from '@/components/FooterView.vue'

  export default {
    components: {
      Navbar,
      Footer,
    }
  }
</script>