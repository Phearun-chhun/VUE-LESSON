const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue !== " ") {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = " ";
      }
    },
    removeGoal(event) {
      this.goals.splice(event.target.id, 1);
    }
  },
});

app.mount("#user-goals");
