const app = Vue.createApp({
  data() {
    return {
      num1: 100,
      num2: 200,
      total:"",
    };
  },
  methods: {
    addNumber() {
      this.total = this.num1 + this.num2;
    }
  },
});

app.mount("#app");
