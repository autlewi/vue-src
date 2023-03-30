<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  B1  from '../components/B1.vue'
import  B2  from '../components/B2.vue'
import  B3  from '../components/B3.vue'
import  B4  from '../components/B4.vue'
import  B5  from '../components/B5.vue'
import  B6  from '../components/B6.vue'

</script>

<template>
  <RouterView />
  <div class="wrapper">
  <B1 />
  <B2 />
  <B3 />
  <B4 />
  <B5 />
  <B6 />
</div>
</template>

<style>
.wrapper {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(8, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 90%;
width: 70%;
}


</style>