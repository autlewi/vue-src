

<script setup>
import { ref } from "vue";
import AudioCard from "./components/AudioCard.vue";

let audioInfo = {
  title: "Lucid Dreaming - FSM Team feat.<escp>",
  audioFile: "fsm-team-escp-lucid-dreaming.mp3",
};

let audioInfo1 = {
  title: "Please Hold Me - Purrple Cat",
  audioFile: "pleaseHoldMe-purpleCat.mp3",
};

let audioInfo2 = {
  title: "Galaxy - Alex-Productions",
  audioFile: "alex-productions-galaxy.mp3",
};

let audioInfo3 = {
  title: "Small Town Girl - FSM Team feat.<escp>",
  audioFile: "fsm-team-escp-small-town-girl.mp3",
};

let audioInfo4 = {
  title: "After The Fire - Ron Gelinas Chillout Lounge",
  audioFile: "ron-gelinas-chillout-lounge-after-the-fire.mp3",
};

let audioInfo5 = {
  title: "Ways - Alex-Productions",
  audioFile: "alex-productions-ways.mp3",
};

let audioInfo6 = {
  title: "Above The Clouds - FSM Team feat.<escp>",
  audioFile: "above-the-clouds.mp3",
};

let audioInfo7 = {
  title: "Hot Pepper - Alex-Productions",
  audioFile: "alex-productions-hot-pepper.mp3",
};

let audioInfo8 = {
  title: "Ranchero - Ron Gelinas Chillout Lounge",
  audioFile: "ron-gelinas-chillout-lounge-ranchero.mp3",
};

let audioInfo9 = {
  title: "Downtown Walk - FSM Team feat.<escp>",
  audioFile: "fsm-team-escp-downtown-walk.mp3",
};
</script>

<template>
  <h2>Lo-fi Music</h2>
  <br />
  <main>
    <section>
      <ul>
      <li><AudioCard v-bind="audioInfo" /></li>
      <li><AudioCard v-bind="audioInfo1" /></li>
      <li><AudioCard v-bind="audioInfo2" /></li>
      <li><AudioCard v-bind="audioInfo3" /></li>
      <li><AudioCard v-bind="audioInfo4" /></li>
      <li><AudioCard v-bind="audioInfo5" /></li>
      <li><AudioCard v-bind="audioInfo6" /></li>
      <li><AudioCard v-bind="audioInfo7" /></li>
      <li><AudioCard v-bind="audioInfo8" /></li>
      <li><AudioCard v-bind="audioInfo9" /></li>
      </ul>
    </section>
  </main>
</template>


<style scoped>
h2{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
ul{
  list-style: none;
}
</style>