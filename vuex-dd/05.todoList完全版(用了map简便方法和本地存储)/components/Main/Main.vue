<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="all" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <Item v-for="item in todoList" :key="item.id" :item="item"></Item>
    </ul>
  </section>
</template>

<script>
import Item from "../Item/Item.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Main",
  components: {
    Item,
  },

  computed: {
    ...mapState(["todoList"]),
    // todoList() {
    //   return this.$store.state.todoList;
    // },
    // 全选或item全选中也选中
    all: {
      get() {
        return this.todoList.every((item) => item.done);
      },
      set(flag) {
        this.checkAll({ flag });
      },
    },
  },

  methods: {
    // 全选或全不选的方法
    ...mapMutations(["checkAll"]),
  },
};
</script>

<style scoped>
</style>