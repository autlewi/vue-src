<script setup>
import { ref} from "vue";

const title = ref("Landscapes of Ghibli")

const imgSrc = ref("/ghibli.jpg")

</script>

<style>
.h1{
    font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>

<template>
    <h1>{{ title }}</h1>
    <img :src="imgSrc" class="center">
</template>