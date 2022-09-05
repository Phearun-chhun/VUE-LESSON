      <script setup>
      import { RouterLink, RouterView } from 'vue-router'
      </script>
<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  <RouterView />
  </div>
</template>

<style >
.app {
  text-align: center; 

}
nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #00a6ff;
  padding: 10px;
}
nav a{
  color:white;
  font-size: 1.5rem;
}
</style>

