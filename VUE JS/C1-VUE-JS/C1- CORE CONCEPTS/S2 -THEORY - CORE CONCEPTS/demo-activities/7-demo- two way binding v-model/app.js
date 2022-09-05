const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    getFullName() {
      return this.name + " the best";
    },
  },
});

app.mount("#events");
