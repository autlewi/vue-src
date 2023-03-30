<template>
  <div class="two">Two</div>
</template>

<script>

</script>

<style>
.two {
    grid-area: 2 / 1 / 5 / 3;
  background-color: rgb(40, 135, 103);
  border-radius: 5px;
  text-align: center;
}
.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(8, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 6; }
.div2 { grid-area: 8 / 1 / 9 / 6; }
.div3 { grid-area: 5 / 4 / 8 / 6; }
.div4 { grid-area: 5 / 1 / 8 / 4; }
.div5 { grid-area: 2 / 1 / 5 / 3; }
.div6 { grid-area: 2 / 3 / 5 / 6; }

</style>