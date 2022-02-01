<template>
  <div id="app" class="bg-dark">

    <NavbarDesktop />
    <NavbarMobile />
    <Header />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <cookie-law theme="myTheme" transitionName="fade">
      <div slot-scope="props" class="container-fluid py-2">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 text-center text-md-start pb-2 pb-md-0">
            <p class="m-0">{{ $t("cookies.text") }}
              <router-link to="/privacy-policy" class="privacy_policy">Privacy Policy</router-link>
            </p>
          </div>
          <div class="col-12 col-md-4 text-center text-md-end pe-md-5">
            <button class="btn btn-sm py-1 px-2 me-3" @click="props.accept">{{ $t("cookies.accept") }}</button>
            <button class="btn btn-sm py-1 px-2" @click="props.close">{{ $t("cookies.decline") }}</button>
          </div>
        </div>
      </div>
    </cookie-law>
  </div>
</template>

<script>
  import NavbarDesktop from "./components/NavbarDesktop.vue";
  import NavbarMobile from "./components/NavbarMobile.vue";
  import Header from "./components/Header.vue";
  import CookieLaw from 'vue-cookie-law';

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
      Header,
      CookieLaw
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

  .Cookie > * {
    margin: 0;
  }

  .Cookie--myTheme {
    background-color: #D3D3D3;
    font-weight: 600;
    opacity: 0.95;

    p {
      color: #212529;
      font-size: 0.7rem;

      .privacy_policy {
        color: #FFA500;
      }
    }

    button {
      background-color: #FFA500;
      border: 2px solid #212529;
      color: #212529;
      font-size: 0.7rem;
      font-weight: 600;

      &:hover {
        background-color: #212529;
        color: #FFA500;
      }
    }
  }

  @media (min-width: 576px) {
    .Cookie--myTheme {

      p {
        font-size: 0.8rem;
        padding-bottom: 0.5rem;
      }

      button {
        font-size: 0.8rem;
      }
    }    
  }

  @media (min-width: 768px) {
    .Cookie--myTheme {

      p {
        font-size: 0.9rem;
        padding-bottom: 0;
      }

      button {
        font-size: 0.9rem;
      }
    }    
  }

  @media (min-width: 992px) {
    .Cookie--myTheme {

      p {
        font-size: 1rem;
        padding-bottom: 0;
      }

      button {
        font-size: 1rem;
      }
    }    
  } 
</style>
