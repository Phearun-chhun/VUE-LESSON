<template>
  <section>
    <h2>My team : {{ teamName }}</h2>
  </section>
</template>

<script>
export default {
  props: ['teamId'],
  inject: ['teams'],
  computed: {
    teamName() {
      for (let team of this.teams) {
        if (team.id === this.teamId) {
          return team.name;
        }
      }
      return 'no name';
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>