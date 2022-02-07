<template>
  <div class="d-none d-lg-block text-uppercase">
    <div class="desktop_nav_shadow fixed-top d-flex justify-content-between align-items-center bg-dark py-2 py-md-3">
      <nav class="col-9">
        <ul class="d-flex justify-content-around">
          <li>
            <router-link to="/about" @click.native="scrollToTop()">{{ $t("navigation.about") }}</router-link>
          </li>
          <li>
            <router-link to="/skills" @click.native="scrollToTop()">{{ $t("navigation.skills") }}</router-link>
          </li>
          <li>
            <router-link to="/portfolio" @click.native="scrollToTop()">{{ $t("navigation.portfolio") }}</router-link>
          </li>
          <li>
            <router-link to="/contacts" @click.native="scrollToTop()">{{ $t("navigation.contacts") }}</router-link>
          </li>
        </ul>
      </nav>

      <div class="col-12 col-lg-3">
        <LangSelector />
      </div>
    </div>
  </div>
</template>

<script>

  import LangSelector from "./LangSelector.vue";

  export default {
    name: "NavbarDesktop",
    methods: { 
      scrollToTop() {
        window.scrollTo(0,700);
      }
    },
    components: {
      LangSelector
    }
  }
</script>

<style lang="scss" scoped>
  .desktop_nav_shadow {
    box-shadow: 0px 2px 10px #ffa500;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {

      a {
        font-size: 1.3rem;
        font-weight: 500;
        color: #D3D3D3;
        text-decoration: none;

        &.router-link-exact-active {
          color: #FFA500;
        }

        &:hover {
          color: #FFA500;
        }
      }
    }
  }

</style>