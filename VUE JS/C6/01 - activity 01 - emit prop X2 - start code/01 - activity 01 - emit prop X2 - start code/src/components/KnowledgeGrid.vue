<template>
  <ul>
    <knowledge-element v-for="topic in topics" :key="topic.id" :id="topic.id" :title="topic.title"
      :description="topic.description" :fullText="topic.fullText" @get-text="getText"></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  inject: ['topics'],
  emits:['get-text'],
  methods: {
    getText(topic) {
      this.$emit("get-text", topic);
    }
  }
};
</script>