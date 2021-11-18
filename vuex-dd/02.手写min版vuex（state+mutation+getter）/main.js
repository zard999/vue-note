import Vue from "vue";
import App from "./App.vue";
// 引入迷你vuex
import Vuex from "./min-vuex";

Vue.use(Vuex);
Vue.config.productionTip = false;

// 注册仓库
const store = new Vuex.Store({
  // 状态
  state: {
    count: 0,
  },

  // 执行方法的mutations
  mutations: {
    // 第二个参数可以传值
    increment(state, num) {
      state.count += num;
    },
  },

  // 异步执行
  // actions: {
  //   increment({ commit }) {
  //     setTimeout(() => {
  //       commit("increment", 3);
  //     }, 1000);
  //   },
  // },

  // 计算属性
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

// 将store挂载到$store上
// Vue.prototype.$store = store;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
