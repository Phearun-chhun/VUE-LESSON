let app = Vue.createApp({
    data(){
        return {
            users:[]
        }
    },
    methods:{
        getUser(){
            axios.get("https://reqres.in/api/users?page=2")
            .then(response => {
                this.users =response.data.data;
            })
        }
    }
})
app.mount('#app');