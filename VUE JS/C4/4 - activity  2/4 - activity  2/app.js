const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: "",
      lastName: "Ogor",
    };
  },  computed:{
    getFullName() {
      console.log("hello i m inside getFullName() ! ");
  
      result = "";
      if (this.firstName !== "") {
        result = this.firstName + " " + this.lastName;
      }
      return result;
    },
    
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },

  },

});

app.mount("#events");
