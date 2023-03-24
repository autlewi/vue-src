<script setup>
import Title from "../../components/Title.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import ItemCard from "../../components/ItemCard.vue";
const props = defineProps(["main"]);

const route = useRoute();
let label = undefined;
setLabel();

watch(
  () => route.path,
  () => {
    console.log("path changed");
  }
);
watch(() => route.params.id, setLabel);
function setLabel() {
  let id = route.params.id;
  let itemName = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : "";
  label = id ? `${route.name} ${itemName}` : route.name;
}
let itemInfo = {
  title: "Shirt Name: Green Shirt",
  imageFile: "green.png",
};
let itemInfo1 = {
  title: "Shirt Name: Orange Shirt",
  imageFile: "orange.png",
};
let itemInfo2 = {
  title: "Shirt Name: Blue Shirt",
  imageFile: "blue.png",
};
</script>

<template>
  <div id="itemview">
    <Title :label=label />
    <div>
      <div v-if="$route.params.id">
        

        <p>
          Our custom hand-crafted {{ $route.params.id }} is a lovely piece of clothing that will fit right into you wardrobe!
          It will look stunning in the upcoming warm weather! 
          <br />

          <b>Price(US): $16</b>
        </p>
        <br />
        <div class="images">
        <img src="/public/green.png" />
        <img src="/public/orange.png" />
        <img src="/public/blue.png" /> <br />
        </div>
        All 3 Shirts for reference! 
      </div>
      <div v-else>
        This is the category list! If you're interested in a shirt enter its name exact name in the URL bar to see more info!
        <br />
        <p class="small">items/:id doesn't seem to want to work when I upload to website - works on local though</p>
        <br />
        <ul>
          <li><ItemCard v-bind="itemInfo" /></li>
          <li><ItemCard v-bind="itemInfo1" /></li>
          <li><ItemCard v-bind="itemInfo2" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
ul{
  list-style: none;
}
img{
  scale: 125%;
  margin: 30px;
}



</style>

