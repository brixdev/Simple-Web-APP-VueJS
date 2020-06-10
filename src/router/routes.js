import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../modules/home/Home.vue"),
    meta: { auth: false },
  },
  {
    path: "/food/:foodId",
    name: "food",
    component: () => import("../modules/food/Food.vue"),
    meta: { auth: false },
  },
];
