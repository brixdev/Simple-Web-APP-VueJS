import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { routes } from "./router/routes";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
