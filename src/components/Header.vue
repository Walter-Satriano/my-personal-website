<template>
  <header class="container-fluid bg-dark">
    <div class="row justify-content-center align-items-center">
      <div class="col-8 col-lg-5 text-center">
        <img src="../assets/io.jpg" alt="walter-header" class="w-75">
      </div>
      <div class="col-12 col-lg-7 text-center text-lg-start">
        <h3>{{ $t("header.hello") }} <span>Walter.</span></h3>
        <h1>Junior Frontend Developer</h1>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="scss" scoped>
  header {

    h1 {
      color: #FFA500;
      font-size: 2rem;
      font-weight: 600;
    }
  
    h3 {
      color: #D3D3D3;
      font-size: 1.2rem;
      font-weight: 300;

      span {
        font-weight: 600;
      }
    }
  }

  @media (min-width: 576px) {
    header {

      h1 {
        font-size: 2.5rem;
      }
    
      h3 {
        font-size: 1.8rem;
      }
    }
  }

  @media (min-width: 768px) {
    header {

      h1 {
        font-size: 2.9rem;
      }
    
      h3 {
        font-size: 2.1rem;
      }
    }
  }  

  @media (min-width: 992px) {
    header {

      h1 {
        font-size: 3.8rem;
      }
    
      h3 {
        font-size: 2.3rem;
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