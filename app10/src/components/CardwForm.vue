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
  margin: 10px 10%;
}
section {
  margin: 10px;
}
#forms {
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

}
#list {
  width: 30%;
  padding: 10px;
  border: solid 1px black;
  border-radius: 5px;
}



</style>

