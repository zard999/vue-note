<template>
  <div class="todo-footer" v-show="isShowFooter">
    <label>
      <input type="checkbox" v-model="isAllCheck" />
    </label>
    <span>
      <span>已完成{{ isComplete }}</span> / 全部{{ todoList.length }}
    </span>
    <button class="btn btn-danger" v-show="isShowBtn">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "todoFooter",
  props: ["todoList"],
  computed: {
    // 是否显示Footer
    isShowFooter() {
      return this.todoList.length;
    },

    // 是否完成
    isComplete() {
      return this.todoList.filter((item) => item.done).length;
    },

    // 是否全选
    isAllCheck: {
      get() {
        return this.todoList.every((item) => item.done);
      },
      set(value) {
        this.$bus.$emit("allCheck", value);
      },
    },

    // 是否显示清除完成按钮
    isShowBtn() {
      return this.todoList.some((item) => item.done);
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