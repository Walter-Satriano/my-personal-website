<template>
  <div class="mobile_nav_shadow fixed-bottom d-block d-lg-none bg-dark">
    <nav class="py-2">
      <ul class="d-flex justify-content-around">
        <li>
          <router-link to="/about" @click.native="scrollToTop()">
            <i class="bi bi-person-circle"></i>
            {{ $t("navigation.about") }}
          </router-link>
        </li>
        <li>
          <router-link to="/skills" @click.native="scrollToTop()">
            <i class="bi bi-tools"></i>
            {{ $t("navigation.skills") }}
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio" @click.native="scrollToTop()">
          <i class="bi bi-wallet2"></i>
            {{ $t("navigation.portfolio") }}
          </router-link>
        </li>
        <li>
          <router-link to="/contacts" @click.native="scrollToTop()">
            <i class="bi bi-envelope-open-fill"></i>
            {{ $t("navigation.contacts") }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

  export default {
    name: "MobileDesktop",
    methods: { 
      scrollToTop() {
        window.scrollTo(0,550);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mobile_nav_shadow {
    box-shadow: 0px 1px 15px #ffa500;
  }
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