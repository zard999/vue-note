<template>
  <div>
    {{ count }}
    <br />
    {{ $store.getters.doubleCount }}
    <button @click="add">add</button>
    <button @click="asyncAdd">async add</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    add() {
      // commit相当于执行了mutation里面的increment方法
      this.$store.commit("increment", 2);
    },

    asyncAdd() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

<style>
</style>
