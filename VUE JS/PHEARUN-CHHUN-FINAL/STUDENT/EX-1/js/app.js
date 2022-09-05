const app = Vue.createApp({
  data() {
    return {
      task_name: "",
      task_priority: "",
      list_tasks: [],
      num: 0,
    };
  },
  methods: {
    addTask() {
      if (this.task_name != "") {
        this.list_tasks.push({ name: this.task_name, priority: this.task_priority });
        console.log({ name: this.task_name, priority: this.task_priority });
      }
      this.task_name = "";
    },
  },
  mounted() {},
  computed: {
    countHighPriorityTasks() { 
        this.list_tasks.filter((task) => {
          task.priority === "red";
        }).length
     
    },
    countNormalPriorityTasks() { 
        this.list_tasks.filter((task) => {
          task.priority === "green";
        }).length
      
      
     
    },
    countNiceToHavePriorityTasks() { 
        this.list_tasks.filter((task) => {
          task.priority === "orange";
        }).length
     
      
     
    },
    countDocumentPriorityTasks() { 
        this.list_tasks.filter((task) => {
          task.priority === "blue";
        }).length
     
      
     
    },
  },
});
app.mount("#app");
