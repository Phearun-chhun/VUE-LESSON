let app = Vue.createApp({
    data() {
        return {
            value:[]
        }
    },
    methods: {
        submit() {
            if (email.value != "" && username.value != "" && password.value != "") {
                this.value.push(email.value + password.value + username.value);
            }
            email.value = "";
            username.value = "";
            password.value = "";
        }
    }
})
app.mount("#form");
let email = document.querySelector("#email");
let username = document.querySelector("#name");
let password = document.querySelector("#password");