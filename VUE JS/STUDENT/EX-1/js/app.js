const app = Vue.createApp({
  data() {
    return {
      task_name: "",
      priority: "Normal",
      select: [],
      list_tasks: [],
      border_left: "",
    };
  },
  methods: {
    addTask() {
      if (this.task_name != "") {
        this.list_tasks.push(this.task_name);
      }
      this.task_name = "";
      if (this.select === "green") {
        this.border_left = "green";
        console.log(this.select);
      } else if (this.select === "orange") {
        this.border_left = "orange";
      } else if (this.select === "red") {
        this.border_left = "red";
      } else {
        this.border_left = "blue";
      }
    },
  },
  mounted() {},
  computed: {},
});
app.mount("#app");
