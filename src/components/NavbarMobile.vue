<template>
  <nav class="d-block d-lg-none bg-dark py-2 fixed-bottom">
    <ul class="d-flex justify-content-around">
      <li>
        <router-link to="/about-me">
          <i class="bi bi-person-circle"></i>
          {{ $t("navigation.aboutMe") }}
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
</template>

<script>
  export default {
    name: "MobileDesktop",
  }
</script>

<style lang="scss" scoped>
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