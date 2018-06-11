<template>
  <div id="app">
    <Todo :title="title"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
export default {
  name: "App",
  data() {
    return {
      title: "Todo App"
    };
  },
  components: {
    Todo: Todo
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
