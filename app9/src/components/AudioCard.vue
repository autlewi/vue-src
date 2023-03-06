<script setup>
import {ref, onMounted} from 'vue';

const audio = ref(null)
const props = defineProps({
    title: String,
    audioFile: String
})

function getAudioUrl(){
    return new URL(`../assets/audio/${props.audioFile}`, import.meta.url)
}

onMounted(() => {
    audio.value.src = getAudioUrl()
})

</script>
<template>
    <div id="card">
        <h3>{{title}}</h3>
        <audio ref="audio" controls></audio>
    </div>
</template>

<style>
audio{
    display: block;
    padding: 0 20px 20px 20px;
}
</style>