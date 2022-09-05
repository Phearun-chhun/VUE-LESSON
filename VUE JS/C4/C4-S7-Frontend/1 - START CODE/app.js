const URL = "http://127.0.0.1:7000/api/todos/";
const app = Vue.createApp({
  data() {
    return {
      todos: [],
      title: "",
      content: "",
      markAsImportant: false,
      select: [],
      todoList: [],
    };
  },
  methods: {
    getList() {
      axios.get(URL).then((response) => {
        this.todos = response.data;
      })
    },
    addTask() {
      axios
        .post(URL, {
        // if ((this.title && this.content) !== null) {
          // this.todos.push({
            id: this.todos.length + 1,
            title: this.title,
            content: this.content,
        status: this.markAsImportant,
        // })  
        // }
      })
      .then((response) => {
        this.getList();
        console.log(this.todos)
      });
      this.title="",
      this.content = ""
    },
    deleteTask(index) {
      axios
        .delete(URL + index).then((response) => {
          this.getList();
          console.log(URL+index);
      })
    },
    markImportant(index) {
      axios.put(URL + "markAsImportant/"+index,{status: true}).then((response) => {
        this.getList();
        console.log(URL + "markAsImportant/" + index, { status: true });

      })
    },
    markNotImportant(index) {
      axios.put(URL + "markAsNotImportant/"+index,{status: false}).then((response) => {
        this.getList();
        console.log(URL + "markAsNotImportant/" + index, { status: false });

      })
    },
  },
  computed: {
    showList() {
      if (this.select === "all") {
        return this.todos;
      } else if (this.select == "important-only") {
        console.log(this.todos.filter((item) => item.status == false));
        return this.todos.filter((item) => item.status == false);
      } else if (this.select == "not-important") {
        return this.todos.filter((item) => item.status == true);
      }
      return this.todos;
    },
  },
  mounted() {
    this.getList();
  },
});

app.mount("#app");
