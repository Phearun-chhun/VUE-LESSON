const app = Vue.createApp({
  data() {
    return {
      styleobj: {
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      },
    };
  },
  methods: {
    changeToGreen() {
      this.styleobj.backgroundColor ="green"
    },
    changeToRed() {
      this.styleobj.backgroundColor ="red"
    }
  },
});

app.mount("#app");
