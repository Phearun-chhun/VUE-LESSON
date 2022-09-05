<template>
  <section>
    <h2>{{topic.title}}</h2>
    <p>{{ topic.fullText}}</p>
  </section>
</template>

<script>
export default {
  props: ['topic']
  // inject:['topic']
};
</script>