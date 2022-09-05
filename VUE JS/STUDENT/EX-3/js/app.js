const app = Vue.createApp({
    data() {
        return {
            url: "https://finalexamapi.herokuapp.com/api/teachers",
            datas:[]
        };
    },
    methods: {
        getData() {
            axios.get(this.url).then((response) => {
                return this.datas = response.data;
            })
        }
    },
    mounted() {
        this.getData();
    },
});
app.mount('#app');