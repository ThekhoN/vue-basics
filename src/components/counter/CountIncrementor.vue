<template>
  <button @click="$emit('increment-count')">
      +
  </button>
</template>

<script>
export default {
  name: "CountIncrementor",
  props: ["increment-count"]
};
</script>

