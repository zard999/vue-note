<template>
  <div class="todo-footer" v-show="isShowFooter">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ isComplete }}</span> / 全部{{ num }}
    </span>
    <button
      class="btn btn-danger"
      v-show="isShowBtn"
      @click="clearCompleteTask"
    >
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "todoFooter",
  computed: {
    // 计算总共数量
    num() {
      return this.$store.state.todoList.length;
    },
    // 是否显示Footer
    isShowFooter() {
      return this.$store.state.todoList.length;
    },

    // 是否完成
    isComplete() {
      return this.$store.state.todoList.filter((item) => item.done).length;
    },

    // 是否全选
    isAllCheck: {
      get() {
        return this.$store.state.todoList.every((item) => item.done);
      },
      set(value) {
        this.$store.commit("allCheck", value);
      },
    },

    // 是否显示清除完成按钮
    isShowBtn() {
      return this.$store.state.todoList.some((item) => item.done);
    },
  },

  methods: {
    clearCompleteTask() {
      this.$store.commit("clearCompleteTask");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>