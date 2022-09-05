const app = Vue.createApp({
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes"],
      profile: {
        name: "Tushar",
        age: "31",
        degree: "Masters",
        position: "Full Stack Developer",
      },
    };
  },
});

app.mount("#app");
