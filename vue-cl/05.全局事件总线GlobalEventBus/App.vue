<template>
  <div>
    <Hello></Hello>
    <World></World>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
import World from "./components/World.vue";
export default {
  components: {
    Hello,
    World,
  },
  data() {
    return {
      msg: "奔驰",
      inpValue: "dd",
    };
  },

  methods: {},
};
</script>

<style>
</style>