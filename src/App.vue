<template>
  <div id="app">
    <!-- <Header /> -->
    <Router />
    <!-- <Home /> -->
  </div>
</template>
<script>
// import Home from "./modules/home/Home.vue";
// import Header from "./components/Header.vue";
import Router from "./router/Router";
export default {
  name: "navbar",
  components: {
    // Header,
    Router,
    // Home,
  },
};
</script>
