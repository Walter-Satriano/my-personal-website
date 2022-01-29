<template>
  <section class="portfolio_section bg-dark">
    <h2 class="text-center text-uppercase py-3 mb-3 mb-lg-5">{{ $t("portfolioSection.title") }}</h2>

    <div class="container-fluid">
      <div class="row justify-content-around">
        <div v-for="project in projects" :key="project.id" class="card bg-dark text-center mb-5">
          <div class="text-center py-4">
            <img :src="require(`../assets/images/${project.projectIcon}`)" alt="">
          </div>
          <div class="card-body">
            <h4 class="card-title text-uppercase">{{ project.name }}</h4>
            <p class="card-text">{{ $t("portfolioSection.madeWith") }} <br> {{ project.madeWith }}</p>
          </div>
          <div class="d-flex flex-column align-items-center pb-4">
            <a :href="project.linkToLiveDemo" target="_blank" class="demo_link btn-lg mb-3">
              <i class="bi bi-globe2 me-1"></i>
              {{ $t("portfolioSection.goToDemo") }}
            </a>
            <a :href="project.linkToGithubCode" target="_blank" class="code_link btn-lg">
              <i class="bi bi-code-square me-1"></i>
              {{ $t("portfolioSection.seeTheCode") }}
            </a>        
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import projectsData from "../assets/portfolio.json";

  export default {
    data() {
      return {
        projects: projectsData,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .portfolio_section {
    padding-bottom: 8rem;

    h2, h4 {
      color: #FFA500;
      font-weight: 600;
    }

    .card {
      max-width: 300px;
      padding: 0;
      border: none;
      border-radius: 20px;
      box-shadow: 6px 6px 12px #FFA500;
      transition: transform .2s;
      
      &:hover {
        transform: scale(1.05);
      }

      img {
        width: 115px;
      }

      p {
        color: #D3D3D3;
        font-weight: 600;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        width: 70%;
        padding: 5px 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #D3D3D3;
        background-color: #212529;
        border: 2px solid #FFA500;

        &:hover {
          color: #212529;
          background-color: #FFA500;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .portfolio_section {

      .card {
        max-width: 335px;

        img {
          width: 125px;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .portfolio_section {
      padding-bottom: 1.5rem;

      .card {
        max-width: 400px;

        img {
          width: 140px;
        }        
      }
    }
  }

  @media (min-width: 1200px) {
    .portfolio_section {

      .card {
        max-width: 350px;

        img {
          width: 150px;
        }        
      }
    }
  }

  @media (min-width: 1400px) {
    .portfolio_section {

      .card {
        max-width: 310px;
      }
    }
  }
</style>
