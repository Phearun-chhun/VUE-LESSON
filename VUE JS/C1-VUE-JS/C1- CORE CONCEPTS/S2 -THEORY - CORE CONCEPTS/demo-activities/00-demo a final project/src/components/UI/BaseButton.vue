<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: var(--main-color-light);
  border-color: var(--main-color-light);
}
</style>