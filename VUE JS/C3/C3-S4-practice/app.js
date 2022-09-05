const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.goal !== "") {
        this.goals.push(this.goal);
        this.goal = "";
      }
    },
    removeGoal(event) {
      this.goals.splice(event.target.id, 1);
    },
  },
});
app.mount("#app");
