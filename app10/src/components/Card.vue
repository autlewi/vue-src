<script setup>
import { ref, onMounted } from 'vue'
import Form from './Form.vue'
const name = ref('')
const email = ref('')
const props = defineProps({
    name: String,
    email: String
})
/*function getName() {
    
    return name.value
}
function getEmail() {
    
    return email.value
}
onMounted(() => {
    name.value = getName()
    email.value = getEmail()
})*/
</script>
<template>
        <div id="card">
            <p> Name: {{ name }}</p>
            <p> Email: {{ email }}</p>
        </div>
</template>
<style >
#card {
    display: block;
    border-style: solid 1px darkgrey;
    border-color: darkgrey;
    border-radius: 2px;

}

</style>