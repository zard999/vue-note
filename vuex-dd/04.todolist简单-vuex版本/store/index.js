import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
  todoList: [
    { id: 1, name: "游泳", done: false },
    { id: 2, name: "射击", done: true },
    { id: 3, name: "跑步", done: false },
  ],
};

const mutations = {
  // 添加item
  add(state, value) {
    state.todoList.unshift({
      id: Date.now(),
      name: value,
      done: false,
    });
  },

  // 删除item
  del(state, id) {
    state.todoList = state.todoList.filter((item) => item.id !== id);
  },

  // 选中Item改变checked
  isCheck(state, id) {
    let item = state.todoList.find((item) => item.id === id);
    item.done = !item.done;
  },

  // 全选和全不选
  allCheck(state, flag) {
    state.todoList.forEach((item) => {
      item.done = flag;
    });
  },

  // 清除已完成任务
  clearCompleteTask(state) {
    state.todoList = state.todoList.filter((item) => !item.done);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  // 本地存储
  plugins: [createPersistedState()],
});
