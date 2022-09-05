import { createApp } from "vue";
import App from "./App.vue";
import FriendNav from "./components/FriendNav";
import FriendForm from "./components/FriendForm";

const app = createApp(App);

app.component("friend-nav", FriendNav);
app.component("friend-form", FriendForm);

app.mount("#app");
