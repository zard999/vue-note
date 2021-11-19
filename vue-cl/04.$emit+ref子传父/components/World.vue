<template>
  <div>
    <h2>{{ car }}</h2>
    <button @click="getD">获取兄弟元素的data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: "宝马",
    };
  },

  methods: {
    getD() {
      this.$emit("getDate", this.car);
    },
  },
};
</script>

<style>
</style>