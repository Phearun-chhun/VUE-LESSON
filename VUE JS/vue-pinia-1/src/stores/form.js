import { defineStore } from "pinia";

export const useFormStore = defineStore({
  id: "form",
  state: () => ({
      all_data: [
        {title:"The best student",description:"The best student description"},
        {title:"The best student1",description:"The best student description1"},
    ],
  }),
  getters: {
  },
  actions: {
      getData() {
          
    }
  },
});
