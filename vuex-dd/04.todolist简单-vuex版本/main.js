import Vue from "vue"; // 引入的是vue.runtime.esm.js  体积小
// vue.js最完整的vue体积比较大  核心功能 + 模板渲染
import App from "./App.vue";
// 引入store
import store from "./store/index";
Vue.config.productionTip = false; // 关闭生产提示

new Vue({
  // 注册store
  store,
  render: (h) => h(App),
}).$mount("#app");
