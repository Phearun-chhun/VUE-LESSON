<template>
  <section>
    <h2>Name : {{ student.name }}</h2>
    <button>Show Details</button>
  </section>
</template>
<script>
export default {
  props: ["student"],
};
</script>

<style></style>
