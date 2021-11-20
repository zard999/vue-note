<template>
  <section class="todoapp">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </section>
</template>

<script>
// 引入样式文件
import "./assets/base.css";
import "./assets/index.css";
// 引入组件
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
</style>