<template>
  <div>
    <h2>我是hello</h2>
    <input
      type="text"
      v-model="inpValue"
      placeholder="请输入"
      @keyup.enter="handleValue"
    />
    <hr />
  </div>
</template>

<script>
export default {
  name: "Hello",

  data() {
    return {
      inpValue: "",
    };
  },

  methods: {
    handleValue() {
      this.$bus.$emit("getDate", this.inpValue);
    },
  },
};
</script>

<style>
</style>