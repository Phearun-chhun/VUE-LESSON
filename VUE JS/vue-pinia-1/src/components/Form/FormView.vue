<template>
    <div class="form_view" v-for="data in storeForm.all_data" :key="data">
        <div class="title">
            <h1>{{data.title}}</h1> 
        </div>
        <div class="description">
            <h4> {{data.description}}</h4>
           
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '@/stores/form';
const storeForm = useFormStore();

</script>

<style lang="scss" scoped>

</style>