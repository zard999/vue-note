<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model.trim="todoName"
      @keyup.enter="addItem"
    />
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      todoName: "",
    };
  },

  methods: {
    addItem() {
      if (!this.todoName) return alert("输入不能为空");
      // this.$store.commit("add", this.todoName);
      this.add(this.todoName);
      this.todoName = "";
    },
    ...mapMutations(["add"]),
  },
};
</script>

<style>
</style>