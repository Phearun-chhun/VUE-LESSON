<template>
  <li>
    <base-card>
      <header>
        <h3>{{ name }}</h3>
        <base-button mode="flat" @click="removeTask(id)">Delete</base-button>
      </header>
      <p>
        <span class="highlight">{{ name }}</span> task with priority
        <span :class="ratingClass">{{ priority }}</span>
      </p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['name', 'priority', 'id'],
  inject: ['removeTask'],
  computed: {
    ratingClass() {
      return 'highlight priority--' + this.priority;
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.priority--hight {
  color: #b80056;
}

.priority--middle {
  color: #330075;
}

.priority--low {
  color: #008327;
}
</style>