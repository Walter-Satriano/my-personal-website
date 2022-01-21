<template>
  <div class="d-flex justify-content-between align-items-center bg-dark py-2 py-md-3 fixed-top">
    <nav class="col-9 d-none d-lg-block text-uppercase">
      <ul class="d-flex justify-content-around">
        <li>
          <router-link to="/about-me">{{ $t("navigation.aboutMe") }}</router-link>
        </li>
        <li>
          <router-link to="/skills">{{ $t("navigation.skills") }}</router-link>
        </li>
        <li>
          <router-link to="/portfolio">{{ $t("navigation.portfolio") }}</router-link>
        </li>
        <li>
          <router-link to="/contacts">{{ $t("navigation.contacts") }}</router-link>
        </li>
      </ul>
    </nav>

    <div class="col-12 col-lg-3">
      <LangSelector />
    </div>
  </div>
</template>

<script>

  import LangSelector from "./LangSelector.vue";

  export default {
    name: "NavbarDesktop",
    components: {
      LangSelector
    }
  }
</script>

<style lang="scss" scoped>
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