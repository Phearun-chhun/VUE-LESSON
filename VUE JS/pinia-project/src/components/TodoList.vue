<template>
    <div v-for="todo in todoList" :key="todo.id" class="list">
        <div class="item">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <div>
                <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
                <span @click="deleteTodo(todo.id)" class="x">&#10006;</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoListStore } from "../stores/useTodoListStore.js";
import { storeToRefs } from "pinia";
export default defineComponent({
    setup() {
        const store = useTodoListStore();

        const { todoList } = storeToRefs(store);
        const { toggleCompleted, deleteTodo } = store;

        return { todoList, toggleCompleted, deleteTodo };
    },
});
</script>

<style scoped>
span {
    margin: 0 10px;
    cursor: pointer;
}
.item{
    background: red;
    margin-bottom: 5px;
    
}
.completed {
    text-decoration: line-through;
}
.x{
    color:white;
}
.list {
    display: flex;
    justify-content: center;
}

.item {
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    width: 80vw;
    padding: 5px;
}
</style>
