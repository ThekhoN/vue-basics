<template>
  <button @click="$emit('decrement-count')">
      -
  </button>
</template>

<script>
export default {
  name: "CountDecrementor",
  props: ["decrement-count"]
};
</script>

