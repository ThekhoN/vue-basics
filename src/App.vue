<template>
  <div id="app">
    <h4>How to pass props from parent to child in Vue:</h4>
    <!-- <PropsParentToChild :msg="msg" /> -->
    <Todo />
  </div>
</template>

<script>
// import PropsParentToChild from "@/components/PropsParentToChild";
import Todo from "@/components/Todo";
export default {
  name: "App",
  data() {
    return {
      msg: "passed props"
    };
  },
  components: {
    // PropsParentToChild: PropsParentToChild
    Todo: Todo
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  background: #ccc;
}
</style>
