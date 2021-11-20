<template>
  <ul class="todo-main">
    <TodoItem v-for="item in todoList" :key="item.id" :item="item"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "../TodoItem/TodoItem.vue";
export default {
  naem: "TodoMain",
  components: {
    TodoItem,
  },

  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>