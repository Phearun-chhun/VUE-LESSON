// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.goal !== "") {
        this.goals.push(this.goal);
        this.goal = "";
      }
    },
    removeGoal(event) {
      this.goals.splice(event.target.id, 1);
    },
  },
});
app.mount("#app");

