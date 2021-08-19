<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100"></div>
    <router-view></router-view>
  </div>
</template>



<script>
import { eventBus } from "./main";
import TheHeader from "./components/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      page: eventBus.page,
    };
  },
  created() {
    eventBus.$on("update:page", (page) => {
      this.page = page;
    });
  },
};
</script>



<style>
</style>
