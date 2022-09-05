const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxASelected() {
      this.boxASelected = !this.boxASelected;
    },
  },
});

app.mount("#styling");
