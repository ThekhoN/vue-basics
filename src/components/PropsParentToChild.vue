<template>
  <div class="test">
      <h1>"{{msg}}"</h1>
      <p>
          This is a test component
      </p>
  </div>
</template>

<script>
export default {
  name: "PropsParentToChild",
  props: ["msg"]
};
</script>

<style scoped>
.test {
  background: orange;
}
</style>


