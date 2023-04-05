
<template>
    <div class="container">
      <h1>Transition and Transitiongroup</h1>
      <button @click="toggleAnimation">Toggle Animation</button>
      <div class="experiments">
        <div class="experiment">
          <h2>Experiment 1</h2>
          <transition name="fade">
            <p v-if="show">
                <img src="/maxwell.jpeg">
            </p>
          </transition>
        </div>
       
        
        <div class="experiment">
          <h2>Experiment 2</h2>
          <transition name="slide-down">
            <p v-if="show">Sample</p>
          </transition>
        </div>
        <div class="experiment">
          <h2>Experiment 3 </h2>
          <transition-group name="fade" mode="out-in">
            <div v-for="item in list" :key="item">{{ item }}</div>
          </transition-group>
          <button @click="shuffleList">Shuffle List</button>
        </div>
        <div class="experiment">
            <h2>Experiment 4: fade transition</h2>
            <button @click="addItem()">Add Item</button>
            <button @click="removeListItem()">Remove Item</button>
      <transition-group
        name="fade"
        tag="ul"
      >
        <li v-for="(item, index) in list" :key="item">{{ item }}</li>
      </transition-group>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";

const show = ref(true);
const list = ref([" 1", " 2", " 3"]);
const showBasic = ref(false);
const showSlide = ref(false);
const showCustom = ref(false);
const showCustomSlide = ref(false);

const nextItemId = ref(4);



function removeListItem() {
  list.value.pop();
}

function toggleAnimation() {
  show.value = !show.value;
}

function addItem() {
  list.value.push(`${list.value.length + 1}`);
}

function shuffleList() {
  list.value.sort(() => Math.random() - 0.5);
}
</script>
  
  <style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

img{
    height: 150px;
    width: 150px;
}

.experiments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.experiment {
  border: 1px solid #ccc;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active,
.list-enter-active,
.list-leave-active,
.slide-enter-active,
.slide-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, 
.fade-leave-to,
.list-enter,
.list-leave-to,
.slide-enter,
.slide-leave-to,
.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.list-enter,
.list-leave-to {
  transform: translateY(20px);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

button {
  margin-top: 1rem;
}
</style>











