<script setup>
import { computed, ref } from "vue";
const props = defineProps(["title", "info"]);
const emit = defineEmits(["update:info", "addRecord"]);

const values = computed({
  get() {
    return props.info;
  },
  set(arg) {
    emit("update:info", arg);
  },
});

</script>
<template>
  <form>
    <fieldset>
      <legend>{{ title }}</legend>
      <div>
        <input id="name" v-model="values.name" />
        <label for="name">Name</label
        ><br />
        <input id="email" v-model="values.email" />
        <label for="address">Email</label
        ><br />
        <button type="button" @click="$emit('addCard')">submit</button>
      </div>
    </fieldset>
  </form>
</template>


<style scoped>
form {
  border-style: solid;
  border-width: 1px;
}

fieldset {
  padding: 10px;
  
}
</style>