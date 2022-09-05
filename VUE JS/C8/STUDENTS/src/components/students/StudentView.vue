<template>
  <ul>
    <li>
      <student-card
        v-for="student of students"
        :key="student.id"
        :student="student"
      >
      </student-card>
    </li>
  </ul>
</template>
<script>
import StudentCard from "./StudentCard.vue";
export default {
  components: { StudentCard },
  inject: ["students"],
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  width: 40rem;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
