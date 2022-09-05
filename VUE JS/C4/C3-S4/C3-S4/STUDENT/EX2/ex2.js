const app = Vue.createApp({
  data() {
    return {
      // htmlAverage:0,
      scores: [
        { name: "a", topic: "HTML", result: 30 },
        { name: "b", topic: "JAVA", result: 40 },
        { name: "c", topic: "JS", result: 51 },
      ],
      name: "",
      topic: "HTML",
      result: "",
    };
  },
  computed: {
    htmlAverage() {
      let htmlScores = 0;
      let htmlScoreNum = 0;
      for (score of this.scores) {
        console.log(score);
        if (score.topic === "HTML") {
          htmlScores += score.result;
          htmlScoreNum += 1;
        }
      }
      return htmlScores / htmlScoreNum;
    },
  },
  methods: {
    addScore() {
      if ((this.name && this.result) === "") {
        alert("Please enter the input")
      } else {
        this.scores.push({
          name: this.name,
          topic: this.topic,
          result: parseInt(this.result),
        });
        this.name = "";
        this.result = "";
        this.topic = "";
        
      }
    },
  },
});

app.mount("#exercise")
