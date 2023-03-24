<script setup>
import {ref, onMounted} from 'vue';

const image = ref(null)
const props = defineProps({
    title: String,
    imageFile: String
})

function getImageUrl() {
    return new URL(`../../public/${props.imageFile}`, import.meta.url)
}
onMounted(() => {
    image.value.src = getImageUrl()
})

</script>
<template>
    <div id="card">
        <h3>{{title}}</h3>
        <img ref="image" />
    </div>
</template>

<style>
audio{
    display: block;
    padding: 0 20px 20px 20px;
}
</style>
  
  <style scoped>
#itemCard{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
}
#label{
        margin-top: 0.5rem;
        font-size: 1.25rem;
        font-weight: bold;
      
}
  </style>
  