<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: {
      type: Number, // 指定数据类型 如果类型不符合会报错
      require: true,
      default: "hhh",
      validator: (value) => { //值校验
        return value > 0;
      },
    },
  },
};
</script>

<style>
</style>