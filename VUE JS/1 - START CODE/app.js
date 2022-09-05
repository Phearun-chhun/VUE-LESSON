const app = Vue.createApp({
  data() {
    return {
      title: "",
      content: "",
      important: false,
      lists: [],
      showAll: "all",
      showOnlyImportant: "only important",
      showOnlyNotImportant: "only not important",
      showSelected: "all",
      showOptions: [
        { show: "show all", value: "all" },
        { show: "show only important", value: "only important" },
        { show: "show only not important", value: "only not important" },
      ],
      showLists:[],
    };
  },

  methods: {
    createTodo() {
      let list = {};
      list["id"] = this.lists.length;
      list["title"] = this.title;
      list["content"] = this.content;
      list["important"] = this.important;
      this.lists.push(list);
      this.title = "";
      this.content = "";
    },
    deleteList(index) {
      this.lists.splice(index, 1);
    },
    markImportant(index) {
      return (this.lists.find((list) => list.id == index).important = true);
    },
    markNotImportant(index) {
      return (this.lists.find((list) => list.id == index).important = false);
    },
  },

  computed: {
    showList() {
      console.log(this.show);
      this.showLists=[];
      if(this.showSelected === this.showAll){
        this.showLists = this.lists;
      }else if(this.showSelected === this.showOnlyImportant){
        for (const list of this.lists) {
          if(list.important === true){
            this.showLists.push(list);
          }
        }
      }else{
        for (const list of this.lists) {
          if(list.important === false){
            this.showLists.push(list);
          }
        }
      }
      return this.showLists;
    },
  },
});

app.mount("#app");
