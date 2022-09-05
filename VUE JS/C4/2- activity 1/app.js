const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  /* 1 - Resolve the problem using COMPUTED property */
  computed: {
    fullName() {
      return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
    }
  },
    /* 1 - Resolve the problem using WATCHERS   */
});

app.mount("#events");
