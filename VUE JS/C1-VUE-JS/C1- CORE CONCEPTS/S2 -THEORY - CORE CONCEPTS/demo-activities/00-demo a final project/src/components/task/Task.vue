<template>
  <section>
    <h2>Task Manager ({{ getMode() }} )</h2>
    <base-button @click="showDialog">Create</base-button>
    <task-dialog
      v-if="isDialogVisible"
      @addTask="addTask"
      @hideDialog="hideDialog"
    ></task-dialog>
    <ul>
      <task-card
        v-for="task in allTasks"
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :priority="task.priority"
      ></task-card>
    </ul>
  </section>
</template>

<script>
import TaskDialog from './TaskDialog.vue';
import TaskCard from './TaskCard.vue';

export default {
  components: {
    TaskDialog,
    TaskCard,
  },
  data() {
    return {
      isDialogVisible: false,
      allTasks: [],
    };
  },
  methods: {
    getMode() {
      return process.env.VUE_APP_MODE;
    },

    hideDialog() {
      this.isDialogVisible = false;
    },

    showDialog() {
      this.isDialogVisible = true;
    },

    removeTask(taskId) {
      const resIndex = this.allTasks.findIndex((res) => res.id === taskId);
      this.allTasks.splice(resIndex, 1);
    },
    addTask(task) {
      const newTask = {
        id: new Date().toISOString(),
        name: task.name,
        priority: task.priority,
      };
      this.allTasks.push(newTask);
    },
  },
  provide() {
    return {
      removeTask: this.removeTask,
    };
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>