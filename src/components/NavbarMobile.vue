<template>
  <div class="d-block d-lg-none bg-dark fixed-bottom">
    <div>
      <LangSelector />
    </div>
    <nav class="py-2">
      <ul class="d-flex justify-content-around">
        <li>
          <router-link to="/about">
            <i class="bi bi-person-circle"></i>
            {{ $t("navigation.about") }}
          </router-link>
        </li>
        <li>
          <router-link to="/skills">
            <i class="bi bi-tools"></i>
            {{ $t("navigation.skills") }}
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio">
          <i class="bi bi-wallet2"></i>
            {{ $t("navigation.portfolio") }}
          </router-link>
        </li>
        <li>
          <router-link to="/contacts">
            <i class="bi bi-envelope-open-fill"></i>
            {{ $t("navigation.contacts") }}
          </router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
  import LangSelector from "./LangSelector.vue";

  export default {
    name: "MobileDesktop",
    components: {
      LangSelector
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    border-top: 2px solid #FFA500;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 500;
        color: #D3D3D3;
        text-decoration: none;

        &.router-link-exact-active {
          color: #FFA500;
        }

        &:hover {
          color: #FFA500;
        }

        i {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>