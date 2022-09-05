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
      healsLeft: 3,
      isGameRunning: false,
      isWin: false,
      isLost: false,
      isGameOver: false,
      specialAttacker: 0,
      disabled: true,
    };
  },
  computed: {
    
  },
  methods: {
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.healsLeft = 3;
      this.isGameRunning = false;
      this.isWin = false;
      this.isGameOver = false;
      this.isLost = false;
      this.specialAttacker = 0;
      this.disabled = true;
    },
    attack() {
      this.playerAttack();
      this.monsterAttack();
      this.checkIsWin();
      this.specialAttacker++;
      if (this.specialAttacker == 2) {
        this.disabled = true;
      }
    },
    heal() {
      this.playerHeal();
      this.specialAttacker++;
      if (this.specialAttacker == 2) {
        this.disabled = true;
      }
    },
    killYourself() {
      this.playerHealth = 0;
      this.isGameRunning = true;
    },
    playerAttack() {
      let playerDamage = getRandomValue(8, 15);
      this.playerHealth -= playerDamage;
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
      }
      
    },
    monsterAttack() {
      let monsterDamage = getRandomValue(5, 12);
      this.monsterHealth -= monsterDamage;
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
      }
    },
    checkIsWin() {
      if (this.playerHealth == 0) {
        this.healsLeft = 0;
        this.isGameRunning = true;
      } else if (this.monsterHealth == 0) {
        this.isGameRunning = true;
      }
      if (this.playerHealth > this.monsterHealth) {
        console.log("player: "+this.playerHealth);
        console.log("monster: " + this.monsterHealth);
        this.isWin = true;
      }
      else  {
          console.log("playerhealth: " + this.playerHealth);
          console.log("monsterhealth: " + this.monsterHealth);
          this.isLost = true;
      }
    },
    playerHeal() {
      if (this.monsterHealth != 0) {
        if (this.playerHealth < 100 && this.playerHealth > 0) {
          let playerHealthIncrease = getRandomValue(8, 20);
          this.playerHealth += playerHealthIncrease;
        }
        if (this.playerHealth > 100) {
          this.playerHealth = 100;
        }
      }
    },
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
