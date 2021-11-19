<template>
  <div>
    <input type="text" />
    <Hello :msg="msg"></Hello>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: -1,
    };
  },
};
</script>

<style>
</style>