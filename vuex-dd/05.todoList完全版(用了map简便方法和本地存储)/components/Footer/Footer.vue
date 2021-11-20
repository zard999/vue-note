<template>
  <footer class="footer" v-show="isShowFooter">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ num }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button
      class="clear-completed"
      v-show="isShowBtn"
      @click="clearCompleteTask"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapState(["todoList"]),
    // 计算完成数量
    num() {
      return this.todoList.filter((item) => item.done).length;
    },

    // 清除按钮是否显示
    isShowBtn() {
      return this.todoList.some((item) => item.done);
    },

    // 是否显示底部
    isShowFooter() {
      return this.todoList.length;
    },
  },

  methods: {
    // 清除完成的任务
    ...mapMutations(["clearCompleteTask"]),
    // clearCompleteTask() {
    //   this.$store.commit("clearCompleteTask");
    // },
  },
};
</script>

<style>
</style>