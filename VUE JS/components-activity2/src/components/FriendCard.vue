<template>
  <!-- <h1>hello</h1> -->
  
 
    <section>
      <header>
        <h1>{{friend.name}}</h1>
      </header>
    <ul>
      
      <li v-for="f in friends" :key="f.id">
        <h2>{{ f.name }}</h2>
        <button @click="toggleDetail">
          {{ detailDisable ? "Hide" : "Show" }} Details
        </button>
        <ul v-if="detailDisable">
          <li>Phone: {{ f.phone }}</li>
          <li>Email: {{ f.email }}</li>
        </ul>
      </li>
      
    </ul>
  
  </section>

</template>


<script>
export default {
  data() {
    return {
      friend: {
        name: "sara",
        age: 40,
      } 
    }
  }
};
</script>

<style></style>

<style scoped>
    body{
      margin: 0;
      padding: 0;
    }
    h1{
      width: 40rem;
      margin: 3rem;
      padding: 1rem;
      border: 1px solid #ccc;
      background-color: purple;
      color: #fff;
      


    }
</style>