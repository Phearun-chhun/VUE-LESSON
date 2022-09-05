 let app = Vue.createApp({
   data() {
     return {
       goals: [],
     };
   },
   methods: {
     getGoals() {
           if (goal.value != "") {
               this.goals.push(goal.value);
               goal.value = "";
            }
     },
   },
 });
 app.mount("#app");
 let goal = document.querySelector('#goal');
 // Your code !! 
//  function getGoal() {
//      let app = document.getElementById('app');
//      let div = document.createElement('div'); 
//     let p = document.createElement('p');
//      p.textContent = goal.value;
//      p.style.border = '1px solid black'; 
//      p.style.padding = '10px';
//     div.appendChild(p);
//      app.appendChild(div);
//       goal.value="";
// }
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', getGoal);
