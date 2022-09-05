const app = Vue.createApp({
    data() {
        return {
            subject: "",
            score: "",
            tables: [],
            minScore: 0,
            averageScore:0,
             maxScore : 0

        }
    },
    methods: {
        addSubject() {
            if (this.subject != "" && this.score != "") {
              this.tables.push({subject:this.subject,score:this.score})
            }
        },
    },
    mounted() {

    },
    computed: {
        getMaxScore() { 
            console.log(this.tables)
            for (let max of this.tables) {
                if (max.score > this.maxScore) {
                    this.maxScore = max.score;
                }
            }
            return this.maxScore;
        },
        getMinScore() { 
            for (let min of this.tables) {
                if (min.score < this.maxScore) {
                    return (this.minScore = min.score);
              }
            }
        },
        averageOfScore() {
            let totalScore = 0;
            for (let k = 0; k < this.tables.length; k++){
               totalScore += this.tables[k].score;
            }
            return this.averageScore = totalScore / this.tables.length;
        }
    }
});
app.mount('#app');