<template>
   <form action="">
        <input type="text" placeholder="input the title of the book" v-model="title">
        <input type="text" placeholder="input the description of the book" v-model="description">
        <div class="btn">
            <button>
                <h1>Submit</h1>
            </button>
        </div>
   </form>
</template>
<style  scoped>
    form{
        width: 80%;
        margin: auto;
    }
    form input{
        width: 80%;
        margin-left: 10%;
        margin-bottom: 5px;
        margin-top: 5px;
        padding: 10px;
    }
</style>