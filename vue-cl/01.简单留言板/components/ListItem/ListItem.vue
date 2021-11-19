<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del(item.id)">删除</a>
    </div>
    <p class="user">
      <span>{{ item.user }}</span
      ><span>说:</span>
    </p>
    <p class="centence">{{ item.content }}</p>
  </li>
</template>

<script>
export default {
  name: "List-Item",
  props: ["item"],

  methods: {
    // 删除留言
    del(id) {
      this.$emit("del", id);
    },
  },
};
</script>

<style>
</style>