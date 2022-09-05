import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    // counterText:""
  }),
  actions: {
    increaseCount() {
      return this.count++;
    },
    decreaseCount() {
      return this.count--;
    },
  },
  getters: {
    counterText(state) {
      if (state.count % 2 === 0) {
       return "even";
      } else {
        return "odd";
      }
      return state.counterText;
    },
  },
});
