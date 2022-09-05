import { createApp } from 'vue'
import App from './App.vue'
import FriendCard from './components/FriendCard'


const app = createApp(App);
app.component("friend", FriendCard);

app.mount('#app')