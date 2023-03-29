<template>
    <main>
  
    <form>
      
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="info.firstName" />
        <br />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="info.lastName" />
        <br />
        <label for="streetAddress">Street Address:</label>
        <input type="text" id="streetAddress" v-model="info.streetAddress" />
        <br />
       <label for="city">City:</label>
        <input type="text" id="city" v-model="info.city" />
        <br />
        <label for="state">State:</label>
        <input type="text" id="state" v-model="info.state" />
        <br />
        <label for="zipCode">Zip Code:</label>
        <input type="text" id="zipCode" v-model="info.zipCode" />
        <br />
      <button id="submit" type="submit" @click="submit">Submit</button>
    </form>
    </main>
  
</template>
  
  <script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { info } from '../assets/userInfo.js'
const store = useUserStore()
const router = useRouter()

function submit() {
  
  store.firstName = info.firstName
  store.lastName = info.lastName
  store.streetAddress = info.streetAddress
  store.city = info.city
  store.state = info.state
  store.zipCode = info.zipCode

  router.replace({ path: '/' })
}
</script>
  