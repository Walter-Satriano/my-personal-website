<template>
  <section class="about_section bg-dark">
    <h2 class="text-center text-uppercase py-3 mb-3 mb-lg-5">{{ $t("aboutSection.title") }}</h2>

    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga porro sit facere quasi quia explicabo nobis unde vitae officia 
            aperiam esse nesciunt vel, consectetur ducimus impedit, fugit aut cumque totam?
          </p>
        </div>
        <div class="col-12 col-lg-5 text-center">
          <img src="../assets/io.jpg" alt="" class="w-50">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {

  }
</script>

<style lang="scss" scoped>
  .about_section {
    padding-bottom: 8rem;

    h2 {
      color: #FFA500;
      font-weight: 600;
    }

    p {
      color: #D3D3D3;
    }
  }

  @media (min-width: 992px) {
    .about_section {
      padding-bottom: 1.5rem;
         
    }
  }

</style>
