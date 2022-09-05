const app = Vue.createApp({
    data() {
        return {
            your_goal:"",
            your_goals:[]
        }
    },
    methods: {
        addGoal() {
            if (this.your_goal != "") {
                this.your_goals.push(this.your_goal)
                this.your_goal = ""
            } 
        },
        removeGoal(event) {
            this.your_goals.splice(event.target.id, 1)
        }
    }
})
app.mount("#user_goal")