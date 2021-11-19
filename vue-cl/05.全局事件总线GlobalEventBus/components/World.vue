<template>
  <div>
    <p>我是World</p>
    <p>数据为：{{ inpValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inpValue: "",
    };
  },

  methods: {
    getDate(value) {
      this.inpValue = value;
    },
  },

  mounted() {
    // this.$bus.$on("inpValue", (value) => {
    //   this.inpValue = value;
    // });

    this.$bus.$on("getDate", this.getDate);
  },
};
</script>

<style>
</style>