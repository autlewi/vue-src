<script setup>
import { ref, reactive } from "vue";
import Form from "./Form.vue";
import Card from "./Card.vue";
let cardInfo = reactive([]);

const nameInput = ref("");
const emailInput = ref("");

const userInfo = ref({
  name: "",
  email: "",
});

function addInfo() {
  cardInfo.push({
    name: userInfo.value.name,
    email: userInfo.value.email,
  });
}
</script>

<template>
  <main>
    <section id="forms">
      <Form
        title="Interest Form"
        v-model:info="userInfo"
        @addCard="addInfo"
      />
    </section>

    <section id="list">
      <span>Submitted Information</span> <br />

      <div v-for="card in cardInfo">
        <span>
          <Card
            v-for="(card, index) in cardInfo"
            :key="index"
            :data="cardInfo"
          />
        </span>
        <br />
      </div>
    </section>
  </main>
</template>

<style>
main {
  display: flex;
  margin: 10px;
  scale: 150%;
}
section {
  margin: 10px;
}
#form {
  width: 70%;
  display: flex;
  flex-direction: column;
}
#list {
  width: 150%;
  padding: 10px;
  border: solid 1px black;
}
label {
  margin: 0 0 0 10px;
}

button {
  margin: 3px 0 0 0;
}
</style>

