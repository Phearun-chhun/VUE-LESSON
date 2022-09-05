const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    setName(event, teacher) {
      this.name = event.target.value + " with teacher : " + teacher;
    },
  },
});

app.mount("#events");
