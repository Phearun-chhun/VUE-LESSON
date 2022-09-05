<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400px"
      
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn fab color="purple"  
          v-bind="attrs"
          v-on="on">
        <v-icon class="white--text">mdi-contacts</v-icon>
      </v-btn>
   
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Contact Us</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
    
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="First name"
               
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Last name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
           
             
              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  outlined
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>