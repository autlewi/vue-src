<template>
  <div id="slideshow">
    <div id="controls">
      <button type="button">
        <span id="backward">&#8592;</span>
      </button>
      <div id="image">
        <img :src="slides.url" />
      </div>
      <button type="button" @click="forward()">
        <span id="forward">&#8594;</span>
      </button>
      <div id="image-info">
        <span>{{ slides.title }}</span
        ><br />
        <span>Photographer: {{ slides.photographer }}</span>
      </div>
      <div id="source">
        <span>Images provided by Pexels.com</span>
      </div>
    </div>
  </div> 
  <!----<div class="container">
    <div class="slides-fade">
      <div class="numbertext">1 / 3</div>
      <img src="showSlides.slides.url">
      {{ showSlides.slides.photographer }} <br />

      <div class="text">{{ slides.name }}</div>

      <div class="numbertext">2 / 3</div>
      {{ showSlides.slides.url }} <br />
      {{ showSlides.slides.photographer }} <br />

      <div class="text">{{ slides.name }}</div>

      <div class="numbertext">3 / 3</div>
      {{ showSlides.slides.url }} <br />
      {{ showSlides.slides.photographer }} <br />

      <div class="text">{{ slides.name }}</div>
    </div>

    <a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>
  </div>
  !--->
</template>

<script setup>
import { createClient } from "pexels";
import { ref, reactive } from "vue";
import { watch } from "vue";
import { onMounted } from "vue";
const client = createClient(
  "lKMDH2iSF73JbzSwURcjFaymyeq1TM3zq1J7A83hhRXagdd80yxtu9HF"
);

const collection = reactive({
  media: {},
});

const photo = reactive({
  name: "",
  photographer: "",
  photographer_url: "",
  url: "",
});

async function getCollection() {
  // get the meta-data for all collections
  let result = await client.collections.all({ per_page: 1 });

  // get the id of first collection
  const id = result.collections[0].id;

  // get media for the collection
  result = await client.collections.media({ id, type: "photos", per_page: 6 });

  // cache the media meta-data
  collection.media = result.media;
}

async function loadImage() {
  let index = [0];

  photo.title = collection.media[index].alt;
  photo.photographer = collection.media[index].photographer;
  photo.photographer_url = collection.media[index].photographer_url;
  photo.url = collection.media[index].src.tiny;

  function forwardincr(){

    
} 

}

/*watch(collection, () => {
  console.log("collection changed");

  if (collection.media.length > 0) {
    loadImage();
  }
});

onMounted(() => {
  console.log("onmounted");
  getCollection();
});*/

/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = [
    {
      name: "Clouds over barren mountains at sunset",
      photographer: "Denys Gromov",

      url: "/canyon.jpg",
    },
    {
      name: "Lake and Mountain",
      photographer: "James Wheeler",

      url: "/mountain-water.jpg",
    },
    {
      name: "Photography of a mountain",
      photographer: "eberhard grossgasteiger",

      url: "/mountain-trees.jpg",
    },
  ];
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}*/
</script>

<style>
/*
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}


.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}


.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}


.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}




.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}


.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

*/

body {
  background-color: rgb(41, 41, 41);
}
img {
  display: inline-block;
  width: 50%;
}

#slideshow {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
#controls {
  display: flex;
  align-items: center;
}
button {
  background-color: rgb(139, 139, 139);
  border-radius: 10px;
  height: 50%;
  margin-right: 10px;
  margin-left: 10px;
  opacity: 25%;
}

#image-info,
#image img {
  width: 400px;
  border-radius: 15px;
}
#photo-info {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 20px;
  text-align: center;
}
#photo-info span {
  display: inline-block;
  margin-top: 8px;
}
#source img {
  width: 30px;
  margin-right: 5px;
}

#forward,
#backward {
  font-size: 50px;
  color: #fff;
  opacity: 100%;
}
</style>