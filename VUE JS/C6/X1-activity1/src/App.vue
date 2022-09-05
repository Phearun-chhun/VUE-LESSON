<template>
  <section>
    <the-navigation></the-navigation>
    <router-view></router-view>
  </section>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Dream Team', members: ['u4', 'u1'] },
      ],
      users: [
        { id: 'u1', fullName: 'Ronan OGOR', role: 'The king' },
        { id: 'u2', fullName: 'Him Hey', role: 'The Queen' },
        { id: 'u3', fullName: 'Rady Y', role: 'The API emperor' },
        { id: 'u4', fullName: 'Sovanda', role: 'The VUE magician' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>