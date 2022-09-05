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
  computed: {
    monsterStyleBar() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerStyleBar() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
   checkUseSpecialAttack() {
      console.log(this.currentRound % 3 !== 0);
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.logMessages = [];
      this.currentRound = 0;
    },
    attackMonster() {
      this.currentRound++;
      const valueOfAttack = getRandomValue(5, 12);
      this.addLogMessage("player", "attack", valueOfAttack);

      this.monsterHealth -= valueOfAttack;
      this.attackPlayer();
      if (this.playerHealth < 0) {
        this.winner = "monster";
      }
      if (this.monsterHealth < 0) {
        this.winner = "player";
      }
      console.log(this.logMessages);
    },
    attackPlayer() {
      const valueOfAttack = getRandomValue(8, 15);
      this.addLogMessage("monster", "attack", valueOfAttack);

      this.playerHealth -= valueOfAttack;
    },
    specialAttack() {
      this.currentRound++;
      const valueOfAttack = getRandomValue(8, 25);
      this.addLogMessage("player", "special attack",  valueOfAttack);
      this.monsterHealth -= valueOfAttack;
      this.attackPlayer();
    },
    healOfPlayer() {
      this.currentRound++;
      const valueOfHealth = getRandomValue(8, 20);
      this.addLogMessage("player", "heal", valueOfHealth);

      if (this.playerHealth + valueOfHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += valueOfHealth;
      }
      this.attackPlayer();
    },
    killYourSelf() {
      this.winner = "monster";
    },
    addLogMessage(who,actionLog,value) { 
      this.logMessages.push({
        by: who,
        type: actionLog,
        value: value
      });
    }
  },
});


app.mount("#game");
