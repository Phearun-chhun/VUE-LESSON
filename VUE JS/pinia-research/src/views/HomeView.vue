<template>
  <div class="home">
    <h1>Home</h1>
    <div class="count">
      {{ storeCounter.state.count}}
    </div>
    <div class="button">
      <button @click="decreaseCount">-</button>
      <button @click="increaseCount">+</button>
    </div>
    <hr>
    <hr>
    <div class="text">
      <h2>This counter is: {{ counterText }} </h2>
    </div>
  </div>
</template>

<script >
import { useCounterStore } from '../stores/counter';
const storeCounter = useCounterStore
export default {
  data() {
    return {
      count: 0,
      counterText:""
    }
  },
  methods: {
    increaseCount(){
      return this.count++; 
    },
    decreaseCount() {
      return this.count--;
    },
    
  },
  computed: {
    counterText() {
      if (this.count % 2 === 0) {
        this.counterText = "even";
      } else {
        this.counterText = "odd";
      }
      return this.counterText;
    }

  }
}
</script>

<style scoped>
  .count {
    font-size: 5rem;
    margin: 20px;
  }
  .button button{
    font-size:40px;
    margin: 10px;
  }
</style>