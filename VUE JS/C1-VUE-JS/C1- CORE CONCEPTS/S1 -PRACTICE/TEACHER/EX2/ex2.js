new Vue({
  el: "#exercise",
  data: {
    name: "",
    topic: "HTML",
    result: 0,
    scores: [
      { name: "a", topic: "HTML", result: 30 },
      { name: "b", topic: "JAVA", result: 40 },
      { name: "c", topic: "JS", result: 51 },
    ],
  },

  computed: {
    htmlAverage: function () {
      let htmlSum = 0;
      let htmlSize = 0;
      for (let score of this.scores) {
        if (score.topic === "HTML") {
          htmlSum += score.result;
          htmlSize += 1;
        }
      }
      return htmlSum / htmlSize;
    },
  },

  methods: {
    addScore() {
      this.scores.push({
        name: this.name,
        topic: this.topic,
        result: parseInt(this.result),
      });
      this.name = "";
      this.topic = "";
      this.result = "F";
    },
  },
});
