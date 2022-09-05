<template>
  <base-dialog title="Create new task" @close="hideDialog">
    <template #default>
      <div class="form-control">
        <label for="name">Your task to do</label>
        <input type="text" id="name" name="name" v-model.trim="taskName" />
      </div>
      <h3>Priority ...</h3>
      <div class="form-control">
        <input
          type="radio"
          id="priority-hight"
          value="hight"
          name="priority"
          v-model="chosenPriority"
        />
        <label for="priority-hight">hight</label>
      </div>
      <div class="form-control">
        <input
          type="radio"
          id="priority-middle"
          value="middle"
          name="priority"
          v-model="chosenPriority"
        />
        <label for="priority-middle">middle</label>
      </div>
      <div class="form-control">
        <input
          type="radio"
          id="priority-low"
          value="low"
          name="priority"
          v-model="chosenPriority"
        />
        <label for="priority-low">low</label>
      </div>
      <p class="error" v-if="invalidInput">
        One or more input fields are invalid. Please check your provided data.
      </p>
    </template>

    <template #actions>
      <base-button @click="addTask">Create</base-button>
    </template>
  </base-dialog>
</template>

<script>
export default {
  data() {
    return {
      taskName: '',
      chosenPriority: null,
      invalidInput: false,
    };
  },
  emits: ['addTask', 'hideDialog'],
  methods: {
    addTask() {
      if (this.taskName === '' || !this.chosenPriority) {
        this.invalidInput = true;
      } else {
        this.invalidInput = false;

        this.$emit('addTask', {
          name: this.taskName,
          priority: this.chosenPriority,
        });

        this.taskName = '';
        this.chosenPriority = null;

        this.hideDialog();
      }
    },
    hideDialog() {
      this.$emit('hideDialog');
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}

.error {
  color: crimson;
}
</style>