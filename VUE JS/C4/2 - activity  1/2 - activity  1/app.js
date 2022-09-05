const app = Vue.createApp({
  data() {
    return {
      boxASelected1: false,
      boxASelected2: false,
      boxASelected3: false,
    };
  },
  methods: {
    boxSelected(event) {
      if(event.target.id == 1) {
        this.boxASelected1 = !this.boxASelected1;
      }else if(event.target.id == 2) {
        this.boxASelected2 = !this.boxASelected2;
      }else if(event.target.id == 3) {
        this.boxASelected3 = !this.boxASelected3;
      }

    }
  },
});

app.mount("#styling");
