<template>
  <div>
    <ul>
      <li>id: {{ item.id }}</li>
      <li>title: {{ item.title }}</li>
      <li>content: {{ item.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$route.query;
    },
  },
};
</script>

<style>
</style>