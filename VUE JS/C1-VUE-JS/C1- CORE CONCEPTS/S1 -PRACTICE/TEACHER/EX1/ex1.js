new Vue({
  el: "#exercise",
  data: {
    operation: "multiply",
    value1: 0,
    value2: 0,
    result: 9,
  },
  methods: {
    computeOperation() {
      if (this.operation === "multiply") {
        this.result = parseInt(this.value1) * parseInt(this.value2);
      }
      if (this.operation === "add") {
        this.result = parseInt(this.value1) + parseInt(this.value2);
      }
    },
  },
});
