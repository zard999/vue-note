<template>
  <li :class="{ completed: item.done }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="item.done"
        @change="checkItem(item.id)"
      />
      <label>{{ item.name }}</label>
      <button class="destroy" @click="del(item.id)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Item",
  props: ["item"],

  methods: {
    // 改变item的done
    // 删除item
    ...mapMutations(["checkItem", "del"]),

    // checkItem(id) {
    //   this.$store.commit("checkItem", id);
    // },

    // del(id) {
    //   this.$store.commit("del", id);
    // },
  },
};
</script>

<style>
</style>