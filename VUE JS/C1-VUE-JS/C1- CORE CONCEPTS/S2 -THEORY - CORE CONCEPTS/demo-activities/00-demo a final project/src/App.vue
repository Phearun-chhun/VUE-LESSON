<template>
  <main>
    <the-navigation></the-navigation>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
:root {
  --main-color: #750579;
  --main-color-light: #e21ee9;
}

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