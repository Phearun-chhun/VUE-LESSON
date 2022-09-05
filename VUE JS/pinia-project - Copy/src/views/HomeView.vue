<script setup>
import Counter from '@/components/CounterComponent.vue';
import { useCounterStore } from '@/stores/counter';
import CounterComponent from '../components/CounterComponent.vue';
const storeCounter = useCounterStore();

</script>
<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <div class="count">
      {{ storeCounter.count}}
    </div> -->
    <CounterComponent/>
    <div class="button">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr>
    <hr>
    <div class="text">
      <h2>This counter is: {{ storeCounter.counterText }} </h2>
    </div>
    <hr>
    <hr>
    <div class="input">
      <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>



<style scoped>
/* .count {
  font-size: 5rem;
  margin: 20px;
} */

.button button {
  font-size: 40px;
  margin: 10px;
}
</style>