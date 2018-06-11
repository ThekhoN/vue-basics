<template>
 <div>
    <h2>{{title}}</h2>
    <CountDecrementor @decrement-count="decrementCount"/>
    <CountDisplay :count="count"/>
    <CountIncrementor @increment-count="incrementCount"/>
  </div>
</template>

<script>
import CountIncrementor from "./CountIncrementor";
import CountDecrementor from "./CountDecrementor";
import CountDisplay from "./CountDisplay";
export default {
  name: "CounterApp",
  props: ["title"],
  data: function() {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
    resetCount() {
      this.count = 0;
    }
  },
  components: {
    CountDisplay,
    CountIncrementor,
    CountDecrementor
  }
};
</script>

