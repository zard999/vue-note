<template>
  <div>
    <p>{{ msg }}</p>
    <Hello :msg="msg" ref="getInp"></Hello>
    <World ref="get"></World>
    <p>Hello传过来的值为：{{ inpValue }}</p>
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

  methods: {
    getDate(value) {
      this.msg = value;
    },

    getInput(value) {
      this.inpValue = value;
    },
  },

  mounted() {
    // 给子组件注册事件，执行这个
    this.$refs.get.$on("getDate", this.getDate);
    this.$refs.getInp.$on("getInp", this.getInput);
  },
};
</script>

<style>
</style>