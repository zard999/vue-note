import Vue from "vue";

const Store = function Store(options = {}) {
  // Store的配置项解构
  const { state = {}, mutations = {}, getters = {} } = options;

  const computed = {};
  const store = this;
  store.getters = {};
  for (let [key, fn] of Object.entries(getters)) {
    computed[key] = function () {
      return fn(store.state, store.getters);
    };
    Object.defineProperty(store.getters, key, {
      get() {
        return store._vm[key];
      },
    });
  }
  //   state为什么会响应式，实际上也是Vue的data提供的响应式
  this._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
  });

  // 向mutations挂载到this上，以便commit调用
  this._mutations = mutations;
};

// 创建commit方法
Store.prototype.commit = function (type, value) {
  // 如果mutation中有这个方法才执行
  if (this._mutations[type]) {
    this._mutations[type](this.state, value);
  }
};

// 当访问state时，返回响应的数据
Object.defineProperties(Store.prototype, {
  state: {
    get() {
      return this._vm._data.$$state;
    },
  },
});

export default { Store };
