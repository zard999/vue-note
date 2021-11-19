<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }}- {{ product.price }}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    },
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", product);
    },
  },

  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style>
</style>