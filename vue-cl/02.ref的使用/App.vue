<template>
  <div>
    <input type="text" ref="foo" />
    <Hello ref="hello"></Hello>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
export default {
  components: {
    Hello,
  },
  mounted() {
    // this指的是VueComponent的实例对象
    console.log(this);
    // this.$refs 是用于获取元素对象
    console.log(this.$refs.foo);
    // 用于组件上，获取的就是整个实例组件对象
    console.log(this.$refs.hello);
  },
};
</script>

<style>
</style>