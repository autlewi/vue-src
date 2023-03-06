<template>
    <span v-bind:class="textColor">
      <p>{{ lorempar1 }}</p><br>

      <p>{{ lorempar2 }}</p><br>

      <p>{{ lorempar3 }}</p><br>
    </span>

    <!----<button :@click="toggleColor">Toggle Color</button>!--->
</template>

<script setup>
import { ref } from "vue";

const lorempar1 = ref("Loremp1");

loremp1.value =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Porta nibh venenatis cras sed felis. Tortor pretium viverra suspendisse potenti. Eget lorem dolor sed viverra ipsum. Diam vulputate ut pharetra sit amet aliquam id diam. Et netus et malesuada fames ac turpis egestas sed tempus. Enim tortor at auctor urna nunc id. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Elit pellentesque habitant morbi tristique senectus et netus et. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet.";

const lorempar2 = ref("Loremp2");

loremp2.value =
  "Consequat ac felis donec et odio pellentesque diam. Nibh tellus molestie nunc non. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Feugiat pretium nibh ipsum consequat nisl vel pretium. Ipsum a arcu cursus vitae congue mauris rhoncus. Mattis enim ut tellus elementum sagittis vitae et leo duis. At volutpat diam ut venenatis tellus in metus vulputate. In fermentum et sollicitudin ac orci. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id eu nisl nunc mi ipsum faucibus vitae aliquet.";

const lorempar3 = ref("Loremp3");

loremp3.value =
  "Id neque aliquam vestibulum morbi blandit cursus risus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Convallis a cras semper auctor neque vitae. Quis commodo odio aenean sed adipiscing. In metus vulputate eu scelerisque felis imperdiet. Augue lacus viverra vitae congue eu consequat. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Elementum integer enim neque volutpat ac tincidunt vitae. Fermentum leo vel orci porta non. In massa tempor nec feugiat nisl pretium. Molestie at elementum eu facilisis sed odio morbi. Nunc sed augue lacus viverra vitae congue eu consequat ac. Ut diam quam nulla porttitor massa id neque aliquam vestibulum.";

const textColor = ref("black");

function toggleColor() {
  textColor.value = (textColor, value === "black") ? "green" : "black";
}
</script>

<style>
.black {
  color: black;
}

.green {
  color: darkgreen;
}
</style>