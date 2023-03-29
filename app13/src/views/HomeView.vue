<template>
  <div>
    <h1>Home</h1>
    <h5> Address form - click edit to update any information!</h5>
    <div>
      <p >First Name: {{ store.firstName }}</p>
      <p>Last Name: {{ store.lastName }}</p>
      <p>Street Address: {{ store.streetAddress }}</p>
      <p>City: {{ store.city }}</p>
      <p>State: {{ store.state }}</p>
      <p>Zip Code: {{ store.zipCode }}</p>
    </div>
    <router-link :to="{ name: 'Edit' }">Edit</router-link>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { info } from '../assets/userInfo.js'
const store = useUserStore();

store.firstName = info.firstName
store.lastName = info.lastName
store.streetAddress = info.streetAddress
store.city = info.city
store.state = info.state
store.zipCode = info.zipCode




</script>


