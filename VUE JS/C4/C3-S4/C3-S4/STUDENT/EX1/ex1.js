const app =  Vue.createApp({
  data() {
    return {
      result: "",
      value1: "",
      value2: "",
      add: "",
      multiply: "",
    };
  },
  methods: {
    computeOperation() {
      if (this.multiply === "multiply") {
        return this.result = this.value1 * this.value2;
      }
      if (this.add === "add") {
        return (this.result = this.value1 + this.value2);
        
      }
    },
  },
});
app.mount("#exercise");