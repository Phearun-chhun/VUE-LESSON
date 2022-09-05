import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import StudentView from "@/components/students/StudentView.vue";
import TeacherView from "@/components/teacher/TeacherView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/teacher", components: TeacherView },
    { path: "/students", components: StudentView },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
