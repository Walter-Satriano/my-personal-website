<template>
  <section class="privacy_policy_section bg-dark">
    <h2 class="text-center text-uppercase py-3 mb-3 mb-lg-5">{{ $t("privacyPolicy.title") }}</h2>

    <div class="container">
      <p class="pb-3">{{ $t("privacyPolicy.text1") }}</p>
      <div class="pb-3">
        <h6>{{ $t("privacyPolicy.dataController") }}<span> Walter Satriano</span></h6>
        <h6>{{ $t("privacyPolicy.ownerEmail") }}<span> walter.satri@gmail.com</span></h6>
      </div>
      <p>{{ $t("privacyPolicy.text2") }}</p>
      <p>{{ $t("privacyPolicy.text3") }}</p>
      <p>{{ $t("privacyPolicy.text4") }}</p>
      <div class="pt-4">
        <p>{{ $t("privacyPolicy.text5") }}</p>
        <h6>{{ $t("privacyPolicy.contactForm") }}</h6>
        <p>{{ $t("privacyPolicy.text6") }}</p>
      </div>
      <div class="pt-4">
        <h6>{{ $t("privacyPolicy.legalReferences") }}</h6>
        <p>{{ $t("privacyPolicy.text7") }}</p>
      </div>



    </div>
  </section>
</template>

<style lang="scss" scoped>
  .privacy_policy_section {
    padding-bottom: 8rem;

    h2, h6 {
      color: #FFA500;
      font-weight: 600;
    }

    p, span {
      color: #D3D3D3;
      font-weight: 600;
    }
  }
</style>