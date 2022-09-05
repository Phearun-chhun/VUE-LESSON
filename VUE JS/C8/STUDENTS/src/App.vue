<template>
  <section>
    <navigation></navigation>
    <router-view></router-view>
  </section>
</template>

<script>
import Navigation from "./components/nav/Navigation.vue";
export default {
  components: { Navigation },
  data() {
    return {
      students: [
        { id: 1, name: "Manuel Lorenz", age: 21 },
        { id: 2, name: "Julie Jone", age: 31 },
      ],
    };
  },
  provide() {
    return { students: this.students };
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  max-width: 40rem;
}
</style>
