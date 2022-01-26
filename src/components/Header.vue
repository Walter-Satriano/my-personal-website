<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center align-items-center">
      <div class="col-8 col-lg-5">
        <img src="../assets/io.jpg" alt="" class="w-75">
      </div>
      <div class="col-11 col-lg-7 text-white">
        <h3>{{ $t("header.hello") }} <span>Walter.</span></h3>
        <h1>Junior Frontend Developer</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: #FFA500;
    font-size: 4rem;
  }

</style>