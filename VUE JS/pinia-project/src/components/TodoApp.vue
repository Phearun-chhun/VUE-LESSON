<template>
    <div class="todo-app">
        <h1>To Do List</h1>
        <todo-form />
        <todo-list />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
export default defineComponent({
    components: { TodoForm, TodoList },
    setup() {
        return {};
    },
});
</script>
<style scoped>


.todo-app {
    padding: 5vh;
    min-height: 100vh;
    /* background-color: #0066ff; */
    color:#fff;
}
.todo-app h1{ 
    color:#00a6ff;
}
</style>
