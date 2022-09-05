const app = Vue.createApp({
  data() {
    return {
      objectives: ["learn Vue 3", "learn components", "learn Vue 3 plugins"],
      vueLink: "https://v3.vuejs.org/",
    };
  },
});

app.mount("#user-goal");
