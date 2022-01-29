<template>
  <section class="skills_section bg-dark">
    <h2 class="text-center text-uppercase py-3 mb-3 mb-lg-5">{{ $t("skillsSection.title") }}</h2>
    
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div v-for="skill in skills" :key="skill.id" class="col-6 col-sm-4 col-lg-3 col-xl-2 text-center pb-5">
          <img :src="require(`../assets/images/${skill.image}`)" alt="">
          <h3 class="mt-2">{{ skill.skillName }}</h3>
          <span v-html="getStar(skill.rating)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import skillsData from "../assets/skills.json";

  export default {
    data() {
      return {
        skills: skillsData,
      }
    },
    methods: {
      getStar(stars) {
        let rate = stars;
        let fullStars = `<i class="bi bi-star-fill"></i>`;
        let emptyStars = `<i class="bi bi-star"></i>`;

        let graphStar = "";
        for (let i = 0; i < 5; i++) {
          if (i < rate) {
            graphStar += fullStars;
          } else {
            graphStar += emptyStars;
          }
        }

        return graphStar;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skills_section {
    padding-bottom: 7rem;

    h2 {
      color: #FFA500;
      font-weight: 600;
    }

    h3 {
      font-size: 1.2rem;
      color: #D3D3D3;
    }

    img {
      width: 90px;
      height: auto;
    }

    span {
      font-size: 1.2rem;
      color: #FFA500;
    }
  }

  @media (min-width: 576px) {
    .skills_section {
    
      h3 {
        font-size: 1.3rem;
      }

      span {
        font-size: 1.3rem;
      }      
    }
  }

  @media (min-width: 576px) {
    .skills_section {
    
      h3 {
        font-size: 1.4rem;
      }

      img {
        width: 100px;
      }      

      span {
        font-size: 1.4rem;
      }      
    }
  }
  
  @media (min-width: 992px) {
    .skills_section {
    
      h3 {
        font-size: 1.5rem;
      }

      img {
        width: 110px;
      }      

      span {
        font-size: 1.5rem;
      }      
    }
  }
  
  @media (min-width: 1400px) {
    .skills_section {
    
      h3 {
        font-size: 1.7rem;
      }

      img {
        width: 120px;
      }      

      span {
        font-size: 1.7rem;
      }      
    }
  }  
</style>
