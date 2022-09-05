const app = Vue.createApp({
  data() {
    return {
      values:"",
    };
  },
  methods: {
    alert() {
      alert("alert")
    }
  },
});

app.mount("#app");
