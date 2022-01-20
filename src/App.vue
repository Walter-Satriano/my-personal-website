<template>
  <div id="app">

    <NavbarDesktop />
    <NavbarMobile />
    <Header />

  </div>
</template>

<script>
  import NavbarDesktop from "./components/NavbarDesktop.vue";
  import NavbarMobile from "./components/NavbarMobile.vue";
  import Header from "./components/Header.vue";

  export default {
    name: "App",
    components: {
      NavbarDesktop,
      NavbarMobile,
      Header
    },
  }
</script>


<style lang="scss" scoped>

</style>
