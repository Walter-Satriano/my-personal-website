<template>
  <div id="app" class="bg-dark">

    <NavbarDesktop />
    <NavbarMobile />
    <Header />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import NavbarDesktop from "./components/NavbarDesktop.vue";
  import NavbarMobile from "./components/NavbarMobile.vue";
  import Header from "./components/Header.vue";

  export default {
    name: "App",
    data() {
      return {
        defaultLanguage: "en"
      }
    },
    beforeMount() {
      //get locale on page load
      let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : this.defaultLanguage;
      
      //Set the locale property of the i18n object from either the localStorage variable or the defaultLanguage.
      this.$i18n.locale = lang;

      //Set the source language's file. We use setLocaleMessage() to load the corresponding JSON file.
      this.$i18n.setLocaleMessage(lang, require(`./assets/lang/${lang}.json`));
    },
    components: {
      NavbarDesktop,
      NavbarMobile,
      Header
    },
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  #app {
    font-family: "Montserrat", sans-serif;

    .fade-enter-active,
    .fade-leave-active {
      transition: all .6s cubic-bezier(1.0, 1.0, 1.0, 1.0);
    }

    .fade-enter-active {
      transition-delay: .6s;
    }

    .fade-enter,
    .fade-leave-active {
      transform: translateY(8rem);
      opacity: 0;
    }
  }
</style>
