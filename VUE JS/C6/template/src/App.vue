<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/nav/Nav';
export default {
  components: {
    Navbar
  },
  data(){
    return {

    }
  },
};
</script>
