const app = Vue.createApp({
  data() {
    return {
      objectives: ["learn Vue 3", "learn components", "learn Vue 3 plugins"],
      vueLink: "https://v3.vuejs.org/",
    };
  },
  methods: {
    getRandomObjective() {
      let ramdomIndex = Math.round(
        Math.random() * (this.objectives.length - 1)
      );
      console.log(ramdomIndex);
      return this.objectives[ramdomIndex];
    },
  },
});

app.mount("#user-goal");
