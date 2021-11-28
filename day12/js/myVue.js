// 定义一个Vue的构造函数
// 进行数据劫持，将new Vue()时传进来的对象中的数据，都添加上get，set
function Vue(options) {
  // 将传入进来的对象中的data重新赋值给当前对象的$data _data
  this.$data = this._data = options.data;
  this.observe(this.$data);

  // this._proxy()
  // 接下来需要做的是实现数据代理，就是将msg，num添加到vm实例上
  Object.keys(this.$data).forEach((key) => {
    const val = this.$data[key];
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val;
      },
      set(newValue) {
        val = newValue;
      },
    });
  });
}

// 如果有方法，一般是放在原型对象山
Vue.prototype = {
  observe: function (obj) {
    //   对传入进来的data中属性做数据劫持，也就是添加get set
    Object.keys(obj).forEach((key) => {
      // 先存原值
      const val = obj[key];
      // 使用Object.defineProperty
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
          console.log("属性被访问了");
          return val;
        },
        set(newValue) {
          console.log("属性被改变了");
          val = newValue;
        },
      });
    });
  },
};
