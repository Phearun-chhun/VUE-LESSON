<template>
  <li>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button @click="$emit('select-topic', id)">Learn More</button>
  </li>
</template>


<script>
export default {
  props: { id: String, title: String, description: String },

  emits: ['select-topic'],
};
</script>