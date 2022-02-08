<template>
  <section class="contacts_section bg-dark">
    <h2 class="text-center text-uppercase py-3">{{ $t("contactsSection.title") }}</h2>
    <p class="text-center mb-3 mb-lg-5">{{ $t("contactsSection.paragraph") }}</p>

    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="form col-11 col-lg-6 col-xl-6 mb-5 mb-lg-0">
          <form ref="myForm" @submit.prevent="sendEmail" class="text-center">

            <div class="col-12 col-md-9 col-lg-11 col-xl-10 form-floating mx-auto mb-3">
              <input id="name" type="text" name="name" class="form-control" placeholder="Name" v-model="name" required>
              <label for="name" class="form-label">{{ $t("contactsSection.inputName") }}</label>
            </div>

            <div class="col-12 col-md-9 col-lg-11 col-xl-10 form-floating mx-auto mb-3">
              <input id="surname" type="text" name="surname" class="form-control" placeholder="Surname" v-model="surname" required>
              <label for="surname" class="form-label">{{ $t("contactsSection.inputSurname") }}</label>
            </div>

            <div class="col-12 col-md-9 col-lg-11 col-xl-10 form-floating mx-auto mb-3">
              <input id="companyName" type="text" name="companyName" class="form-control" placeholder="Company Name" v-model="companyName" required>
              <label for="companyName" class="form-label">{{ $t("contactsSection.inputCompanyName") }}</label>
            </div>        

            <div class="col-12 col-md-9 col-lg-11 col-xl-10 form-floating mx-auto mb-3">
              <input id="email" type="email" name="email" class="form-control" placeholder="Email" v-model="email" required>
              <label for="email">{{ $t("contactsSection.inputemail") }}</label>
            </div>

            <div class="col-12 col-md-9 col-lg-11 col-xl-10 form-floating mx-auto mb-3">
              <textarea id="message" name="message" class="form-control" placeholder="Message" style="height: 180px" v-model="message" required></textarea>
              <label for="message">{{ $t("contactsSection.inputMessage") }}</label>
            </div>

            <div class="checkbox mb-4">
              <input class="me-2" type="checkbox" value="agree" id="agree" v-model="checked">
              <label for="agree">{{ $t("contactsSection.checkboxAuthorisation") }}</label>
            </div>
            <button :disabled="!checked" type="submit" class="btn btn-lg text-uppercase">{{ $t("contactsSection.sendMessage") }}</button>
            <p v-if="isFormSubmitted" class="pt-4">{{ $t("contactsSection.successFormSubmit") }}</p>
          </form>
        </div>

        <div class="col-11 col-lg-6 text-center">
          <div>
            <h4 class="text-uppercase mb-3">{{ $t("contactsSection.contactDetails") }}</h4>
            <h5 class="mb-3"><i class="bi bi-geo-alt-fill me-2"></i>{{ $t("contactsSection.contactDetailLocation") }}</h5>
            <h5 class="mb-3"><i class="bi bi-telephone-fill me-2"></i>+39 347 6099519</h5>
            <h5 class="mb-3"><i class="bi bi-envelope-fill me-2"></i>walter.satri@gmail.com</h5>
            <h5 class="mb-3"><i class="bi bi-skype me-2"></i>archiwalty</h5>
          </div>
          <div class="mt-5">
            <h4 class="text-uppercase mb-3">{{ $t("contactsSection.followMe") }}</h4>
            <div class="social">
              <a href="https://www.linkedin.com/in/walter-satriano/" target="blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/Walter-Satriano" target="blank"><i class="bi bi-github ms-4"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="text-center">
      <p>{{ $t("contactsSection.copyRight", {dateYear}) }}</p>
    </footer>
  </section>
</template>

<script>
  import emailjs from '@emailjs/browser';

  export default {
    data() {
      return {
        name: '',
        surname: '',
        companyName: '',
        email: '',
        message: '',
        checked: false,
        isFormSubmitted: false,
        dateYear: new Date().getFullYear()
      }
    },
    methods: {        
      sendEmail() {
        try {
          emailjs.sendForm('service_i7upy2f', 'template_ck3pnv8', this.$refs.myForm,
          'user_2AoepO4tN1059cmV3f2CR', {
            name: this.name,
            surname: this.surname,
            companyName: this.companyName,
            email: this.email,
            message: this.message
          })
          this.isFormSubmitted = true
          console.log('SUCCESS!')

        } catch(error) {
            console.log({error})
        }
        
        //clear form fields
        this.name = ''
        this.surname = ''
        this.companyName = ''
        this.email = ''
        this.message = ''
        this.checked = false

      }
    }
  }
</script>

<style lang="scss" scoped>
  .contacts_section {
    padding-bottom: 8rem;

    h2, h4 {
      color: #FFA500;
      font-weight: 600;
    }

    h5 {
      color: #D3D3D3;
      font-size: 1.1rem;

      i {
        font-size: 1.5rem;
      }
    }

    p {
      color: #D3D3D3;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0 20px;
    }

    .social {
      a {
        color: #D3D3D3;
        font-size: 2.5rem;
      }
    }

    .form {

      input, textarea, button {
        border: 2px solid #FFA500;
        background-color: #212529;
        color: #D3D3D3;
      }

      label {
        color: #D3D3D3;
        font-weight: 600;
      }

      p {
        font-size: 1.1rem;
        color: #FFA500;
      }

      button {
        font-size: 1.1rem;
        font-weight: 600;

        &:hover {
          background-color: #FFA500;
          color: #212529;
        }
      }
    }

    .checkbox {
      label {
        font-size: 0.9rem;
      }
    }

    footer {
      margin-top: 5rem;

      p {
        font-size: 1rem;
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 270px) and (max-width: 310px) {
    .contacts_section {
    
      p {
        font-size: 1.2rem;
      }

      h5 {
        font-size: 1rem;

        i {
          font-size: 0.9rem;
        }
      }      

    }
  }

  @media (min-width: 992px) {
    .contacts_section {
      padding-bottom: 1.5rem;

      p {
        font-size: 1.2rem;
      }

      h5 {
        font-size: 1.2rem;

        i {
          font-size: 1.4rem;
        }
      }      

    }
  }

  @media (min-width: 1200px) {
    .contacts_section {
    
      p {
        font-size: 1.3rem;
      }

      h5 {
        font-size: 1.3rem;

        i {
          font-size: 1.5rem;
        }
      }      

    }
  }

  @media (min-width: 1400px) {
    .contacts_section {
    
      p {
        font-size: 1.5rem;
      }

      h5 {
        font-size: 1.5rem;

        i {
          font-size: 1.7rem;
        }
      }      

    }
  }  

</style>
