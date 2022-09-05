
const app = Vue.createApp({
  data() {
    return {
      todos: [],
      newTitle: "",
      newContent: "",
      filterImportant: "all",
      url: "http://127.0.0.1:7500/api/todos/",
    };
  },

  methods: {
    // ---------------------------------------------------------
    //  BACK END REQUESTS METHODS
    // ---------------------------------------------------------

    // FETCH todos
    fetchTodos() {
      axios.get(this.url).then((response) => {
        console.log(response)
        this.todos = response.data;

      });
    },

    // CREATE todo
    createTodo() {
      const newTodo = {
        title: this.newTitle,
        description: this.newContent,
        important: 0,
      };
      axios.post(this.url, newTodo).then((response) => {
        this.fetchTodos();
      });
      this.newTitle = "";
      this.newContent = "";
    },

    // SET todo importance
    markImportant(todo, status) {
      console.log(status)
      todo.important = status;
      axios.put(this.url + todo.id,todo).then((response) => {
        this.fetchTodos();
      });
    },

    // DELETE todo
    deleteTodo(todo) {
      axios.delete(this.url + todo.id).then((response) => {
        this.fetchTodos();
      });
    },

    // ---------------------------------------------------------
    //  VIEW METHODS
    // ---------------------------------------------------------

    getCardstyle(todo) {
      return { important: todo.important };
    },

    // FILTER  todos
    getFilteredTodos(filter) {
      if (filter === "all") {
        return this.todos;
      } else {
        let importantFilter = false;
        if (filter === "important-only") {
          importantFilter = true;
        }
        return this.todos.filter((todo) => todo.important == importantFilter);
      }
    },
  },

  mounted() {
    this.fetchTodos();
  },
});

app.mount("#app");
