const app = Vue.createApp({
  data() {
    return {
      images: [
        "https://images6.fanpop.com/image/photos/41100000/-Cute-Little-Kitten-cats-41100525-1920-1280.jpg",
        "https://images6.fanpop.com/image/photos/40200000/Kitten-cats-40265046-1920-1200.jpg",
        "https://images4.fanpop.com/image/photos/14700000/Attack-cats-14749836-1600-1200.jpg",
        "https://images2.fanpop.com/image/photos/9400000/Funny-Cats-cats-9473111-1600-1200.jpg",
        "https://images6.fanpop.com/image/photos/40700000/Cats-cats-40762265-268-268.gif",
      ],
      currentImage: 0,
      
    };
  },
  methods: {
    previousImage: function () {
      if(this.currentImage !== 0) {
            this.currentImage--;
          }
    },
    nextImage: function () {
      if (this.currentImage !==(this.images.length - 1)) {
        this.currentImage++;
      }
    }
  },
});
app.mount("#app");
