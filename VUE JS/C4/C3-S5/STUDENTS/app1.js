function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    
    };
  },
  computed: {},
  methods: {
    
    getPlayerBarColor() {
      if (this.playerHealth < 20) {
        return "red";
      } else if (this.playerHealth < 60) {
        return "yellow";
      } else {
        return "green";
      }
    },
    getMonsterBarColor() {
      if (this.monsterHealth < 20) {
        return "red";
      } else if (this.monsterHealth < 60) {
        return "yellow";
      } else {
        return "green";
      }
    },
  },
});

app.mount("#game");
