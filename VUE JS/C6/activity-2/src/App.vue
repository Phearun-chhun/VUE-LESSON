<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li
        v-for="(name, idx) in names"
        :key="idx"
        :class="{ red: name === 'Ronan' }"
      >
        {{ idx }} {{ name.toUpperCase() }}
      </li>
    </ul>
    <img :src="img" alt="" />
  </div>
</template>

<script>
import flower from "./assets/flower.jpg";

export default {
  data() {
    return {
      title: "Hello PNC !",
      names: ["Ronan", "Rady", "Sovanda", "Channak", "Ronan"],
      img: flower,
    };
  },
};
</script>

<style>
.red {
  color: red;
}
img {
  width: 100px;
  height: auto;
}
#app {
  text-align: center;
}
ul {
  list-style: none;
}
</style>
