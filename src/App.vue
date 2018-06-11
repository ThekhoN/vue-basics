<template>
  <div id="app">
    <!-- <Todo :title="title"/> -->
    <CounterApp :title="title" />
  </div>
</template>

<!--
<script>
// Todo
import Todo from "@/components/Todo";
export default {
  name: "App",
  components: {
    Todo: Todo
  }
};
</script>
-->


<script>
// CounterApp
import CounterApp from "@/components/counter/CounterApp";
export default {
  name: "App",
  data() {
    return {
      title: "Counter App"
    };
  },
  components: {
    CounterApp
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
</style>
