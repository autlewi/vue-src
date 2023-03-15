
<template>
    <Parent />
</template>

<script>
import Parent from './components/Parent.vue';

export default {
  provide: {
    provideString: 'Hello! This is a provided message. This message was injected into the child component which is imported in the parent component which is then finally [only] imported in this main vue file. The child component is retrieving data from the ancestor component aka app.vue using inject and provide.',
    providedNum: 28
  },
  components: {
    Parent
  }
};
</script>

