<template>
  <div>
    <ul>
      <li>id: {{ id }}</li>
      <li>title: {{ title }}</li>
      <li>content: {{ content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "content"],
  computed: {
    item() {
      return this.$route.query;
    },
  },

  mounted() {
    console.log(this.id);
  },
};
</script>

<style>
</style>