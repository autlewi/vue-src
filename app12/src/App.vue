<script setup>
import { RouterView } from "vue-router"
import Navbar from './components/nav/Navbar.vue'
import {ref} from 'vue'

const main = ref(null);
</script>

<template>
  <Navbar />
  <main ref="main">
    <RouterView :main="main" />
  </main>
</template>

<style>
body {
  font-family: Helvetica;
}
main {
    display: block;
    position: absolute;
    bottom: 1;
    top:0;
    left:0;
    right:0;
    padding: 50px;
    margin: 50px;
   
}
</style>