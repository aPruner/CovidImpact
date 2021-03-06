import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../pages/Home.vue");
const Assessment = () => import("../pages/Assessment.vue");
const FinancialAid = () => import("../pages/FinancialAid.vue");
const News = () => import("../pages/News.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/assessment",
    name: "assessment",
    component: Assessment
  },
  {
    path: "/financial-aid",
    name: "financial-aid",
    component: FinancialAid
  },
  {
    path: "/news",
    name: "news",
    component: News
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;