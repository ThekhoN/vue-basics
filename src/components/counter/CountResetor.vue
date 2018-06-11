<template>
  <button v:on-click="resetCount">
      Reset Count
  </button>
</template>

<script>
export default {
  name: "CountResetor",
  props: ["resetCount"]
};
</script>

