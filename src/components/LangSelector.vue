<template>
  <div class="d-flex justify-content-center align-items-center text-uppercase py-1 py-lg-0">
    <img src="../assets/images/gb.svg" alt="English-Flag">
    <a :class="'link' + [activeLanguage === 'en' ? ' active' : '']"
      @click="selectLanguage('en')">Eng
    </a>

    <span> | </span>
    
    <img src="../assets/images/it.svg" alt="Italian-Flag">
    <a :class="'link' + [activeLanguage === 'it' ? ' active' : '']"
      @click="selectLanguage('it')">Ita
    </a>
  </div>
</template>

<script>
  export default {
    name: "LangSelector",
    data() {
      return {
        activeLanguage: this.$i18n.locale
      }
    },
    methods: {
      selectLanguage(lang) {

        this.activeLanguage = lang; // update CSS class in selector
        this.$i18n.locale = lang;
        this.$i18n.setLocaleMessage(lang, require(`../assets/lang/${lang}.json`));

        // persist selected language
        localStorage.setItem("lang", lang);
      },
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 18px;
    height: auto;
    margin-right: 0.6rem;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: #D3D3D3;
    margin: 0 1.2rem;
  }

  .link {
    font-size: 0.9rem;
    font-weight: 500;
    color: #D3D3D3;
    text-decoration: none;
    cursor: pointer;

    &.active {
      color: #FFA500;
    }
  }

  @media (min-width: 576px) {
    .link {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 25px;
      height: auto;
    }

    span {
      font-size: 1.3rem;
    }

    .link {
      font-size: 1.3rem;
    }    
  }
</style>
