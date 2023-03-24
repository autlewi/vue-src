<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <nav>
            <RouterLink to="/" class="link">Home</RouterLink>
            <RouterLink to="/items/" class="link"> Items </RouterLink>
            
        </nav>
</template>

<style>
.link {
    margin: 5px;
}
</style>