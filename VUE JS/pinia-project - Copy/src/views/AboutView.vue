<template>
  <div class="about">
    <h1>About</h1>
    <button @click="storeCounter.increaseCount"> {{ storeCounter.count}}</button>

    <!-- <div class="count">

    </div> -->
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore();

</script>

<style  scoped>
.count {
  font-size: 5rem;
  margin: 20px;
}
</style>