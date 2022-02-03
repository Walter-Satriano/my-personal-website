import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Portfolio from "../views/Portfolio.vue";
import Contacts from "../views/Contacts.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/about"
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
