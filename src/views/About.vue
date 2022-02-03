<template>
  <section class="about_section bg-dark">
    <h2 class="text-center text-uppercase py-3 mb-3 mb-xl-5">{{ $t("aboutSection.title") }}</h2>

    <div class="container-fluid">
      <div class="row justify-content-center align-items-center m-0">
        <div class="col-12 col-lg-11 col-xl-7 text-center text-xl-start">
          <p>{{ $t("aboutSection.text1") }}</p>
          <p>{{ $t("aboutSection.text2") }}</p>
          <p>{{ $t("aboutSection.text3") }}</p>

          <a href="./Resume_Walter_Satriano.pdf" target="blank" class="btn btn-lg text-uppercase mb-4 mb-xl-0">
            <i class="bi bi-download me-2"></i>
            {{ $t("aboutSection.downloadCv") }}
          </a>
        </div>
        <div class="col-10 col-lg-5 text-center">
          <img src="../assets/images/walter-with-duck.jpg" alt="walter-with-duck" class="img-fluid">
          <figcaption class="mt-2"><i>"{{ $t("aboutSection.imgCaption") }}"</i><br><span>W.S.</span></figcaption>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about_section {
    padding-bottom: 8rem;

    h2 {
      color: #FFA500;
      font-weight: 600;
    }

    p {
      color: #D3D3D3;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  a {
    font-size: 1rem;
    font-weight: 600;
    border: 2px solid #FFA500;
    background-color: #212529;
    color: #FFA500;

    &:hover {
      background-color: #FFA500;
      color: #212529;
    }

    i {
      font-size: 1.2rem;
    }
  }

  img {
    border: 3px solid #FFA500;
  }


  figcaption {
    font-size: 1rem;
    color: #FFA500;
    font-weight: 500;

    span {
      color: #D3D3D3;  
    }
  }

  @media (min-width: 992px) {
    .about_section {
      padding-bottom: 2rem;
         
    }
  }

</style>
