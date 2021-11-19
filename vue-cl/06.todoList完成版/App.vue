<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader ref="add"></TodoHeader>
      <TodoMain :todoList="todoList"></TodoMain>
      <TodoFooter :todoList="todoList"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader/TodoHeader.vue";
import TodoMain from "./components/TodoMain/TodoMain.vue";
import TodoFooter from "./components/TodoFooter/TodoFooter.vue";
import TodoItem from "./components/TodoItem/TodoItem.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
    TodoItem,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },

  methods: {
    // 添加item
    add(value) {
      this.todoList.unshift({
        id: Date.now(),
        name: value,
        done: false,
      });
    },

    // 删除item
    del(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id);
    },

    // 选中Item改变checked
    isCheck(id) {
      let item = this.todoList.find((item) => item.id === id);
      item.done = !item.done;
    },

    // 全选和全不选
    allCheck(flag) {
      this.todoList.forEach((item) => {
        item.done = flag;
      });
    },
  },

  watch: {
    // 本地存储
    todoList: {
      handler(newValue) {
        localStorage.setItem("todoList", JSON.stringify(newValue));
      },
      // 开启真正的深度监视
      deep: true,
    },
  },

  mounted() {
    // 第二种思路：refs+$emit
    // this.$refs.add.$on("add", this.add);
    // 第三种思路 全局事件总线bus
    // 添加item
    this.$bus.$on("todoName", this.add);

    // 删除item
    this.$bus.$on("del", this.del);

    // 选中Item改变checked
    this.$bus.$on("isCheck", this.isCheck);

    // 全选和全不选
    this.$bus.$on("allCheck", this.allCheck);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>