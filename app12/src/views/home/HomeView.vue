
<script setup>
    import Title from '../../components/Title.vue'
  
   
    const props = defineProps(['main'])
 
</script>

<template>
   
    <Title label="Routing Homework Home Page" />
    <div>
        Welcome to the T-Shirt Shop! Click "items" in the navbar to look at our <b>very</b> limited supply of shirts
    </div>
    <br />
    <br />
    <img src="/shop.jpeg" />
</template>

<style>
img{
    scale: 75%;
}



</style>