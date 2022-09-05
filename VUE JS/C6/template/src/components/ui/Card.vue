<template>
  <v-card
    :loading="loading"
    class="mx-auto my-2"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="2"
        indeterminate
      ></v-progress-linear>
    </template>
    <slot></slot>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
    }),

    methods: {
    }
  }
</script>