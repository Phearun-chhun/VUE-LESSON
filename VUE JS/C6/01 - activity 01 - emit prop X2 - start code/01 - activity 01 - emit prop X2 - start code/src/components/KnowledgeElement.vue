<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="getText">Learn More</button>
  </li>
</template>

<script>
export default {
  props: { id: String, title: String, description: String, fullText: String },
  // inject: { id: String, title: String, description: String, fullText: String },
  emits:['getText'],
  methods: {
    getText() {
      this.$emit("get-text", { id: this.id, title: this.title, description: this.description, fullText: this.fullText })
    }
  },
};
</script>