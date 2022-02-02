<template>
  <header class="container-fluid bg-dark">
    <div class="d-block d-lg-none mb-5">
      <LangSelector />
    </div>
    <div class="row justify-content-center align-items-center m-0">
      <div class="col-10 col-sm-11 col-lg-5 text-center mb-4 mb-xl-0">
        <img src="../assets/images/square.jpg" alt="walter-header" class="img-fluid">
      </div>
      <div class="col-12 col-lg-11 col-xl-6 text-center text-xl-start">
        <h3>{{ $t("header.hello") }} <span>Walter.</span></h3>
        <h1>Junior Frontend Developer</h1>
      </div>
    </div>
  </header>
</template>

<script>
  import LangSelector from "./LangSelector.vue";

  export default {
    name: "Header",
    components: {
      LangSelector
    }
  }
</script>

<style lang="scss" scoped>
  header {
    padding-top: 1rem;
    padding-bottom: 3rem;

    h1 {
      color: #FFA500;
      font-size: 2.5rem;
      font-weight: 600;
    }
  
    h3 {
      color: #D3D3D3;
      font-size: 1.5rem;
      font-weight: 300;

      span {
        font-weight: 600;
      }
    }
  }

  @media (min-width: 576px) {
    header {

      h1 {
        font-size: 3rem;
      }
    
      h3 {
        font-size: 2.3rem;
      }
    }
  }

  @media (min-width: 768px) {
    header {

      h1 {
        font-size: 3.2rem;
      }
    
      h3 {
        font-size: 2.5rem;
      }
    }
  }  

  @media (min-width: 992px) {
    header {
      padding: 8rem 0 5rem 0;

      h1 {
        font-size: 3.8rem;
      }
    
      h3 {
        font-size: 2.3rem;
      }
    }
  }

  @media (min-width: 1200px) {
    header {

      h1 {
        font-size: 4rem;
      }
    
      h3 {
        font-size: 3rem;
      }
    }
  }

  @media (min-width: 1400px) {
    header {

      h1 {
        font-size: 5rem;
      }
    
      h3 {
        font-size: 2.9rem;
      }
    }
  }  
</style>