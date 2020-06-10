<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "../components/Header";
// import { routes } from "./routes";

export default {
  name: "navbar",
  components: { Header },
};
</script>
