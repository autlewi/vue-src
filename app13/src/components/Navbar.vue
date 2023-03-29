<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <nav>
            <RouterLink to="/" class="link">Home</RouterLink>
            <RouterLink to="/edit/" class="link"> Edit </RouterLink>
            
        </nav>
</template>

<style>
.link {
    margin: 5px;
}
</style>