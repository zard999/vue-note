<template>
  <div>
    <input
      type="text"
      v-model="inpValue"
      placeholder="请输入"
      @keyup.enter="handleValue"
    />
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: {
      type: String, // 指定数据类型 如果类型不符合会报错
      require: true,
      default: "hhh",
      // validator: (value) => {
      //   //值校验
      //   return value > 0;
      // },
    },
  },

  data() {
    return {
      inpValue: "",
    };
  },

  methods: {
    handleValue() {
      this.$emit("getInp", this.inpValue);
    },
  },
};
</script>

<style>
</style>