<template>
<v-container>
  <v-layout row>
      <v-flex xs12 sm6 md3 v-for="item of data" :key="item.id" class="px-1">
         <card>
            <v-img
            height="250"
            :src="item.largeImageURL"
          ></v-img>

          <v-card-title>{{item.user}}</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="item.likes"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{item.views}}
              </div>
            </v-row>
            <br>
            <div>{{item.tags}}</div>
          </v-card-text>
          </card>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Card from '@/components/ui/Card';
import Api from '@/api/api.js'
  export default {
    components: {
      Card
    },
    data() {
      return {
        data: null,
      }
    },
    methods: {
      getData() {
        const ApiKey = "?key=5209560-2af4ef736c4deccb0a984c338&q=yellow+flowers&image_type=photo&pretty=true"
        Api.get(ApiKey).then(response => {
         this.data = response.data.hits;
        });
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>
