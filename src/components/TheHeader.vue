<template>
  <nav class="navbar navbar-light bg-light navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" />
      LOGO
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
    </button>
    <div id="collapse" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a
            class="nav-link"
            @click="changePage('User')"
            :class="{ active: page === 'User' }"
            href="#"
            >Boutique</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="changePage('Admin')" href="#">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      page: eventBus.page,
    };
  },
  methods: {
    changePage(page) {
      eventBus.changePage(page);
    },
  },
  created() {
    eventBus.$on("update:page", (page) => {
      this.page = page;
    });
  },
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });
        const nav = document.querySelector("#" + binding.value);
        el.addEventListener("click", (e) => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          e.stopPropagation();
        });
      },
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>