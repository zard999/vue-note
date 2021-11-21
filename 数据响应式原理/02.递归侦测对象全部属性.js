// 如果obj内有嵌套的属性

function observe(data) {
  if (typeof data !== "object") return;
  return new Observer(data);
}

class Observer {
  constructor(value) {
    this.value = value;
    this.walk();
  }

  walk() {
    Object.keys(this.value).forEach((key) => defineReactive(this.value, key));
  }
}

function defineReactive(data, key, value = data[key]) {
  observe(value);

  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) {
        return;
      }
      value = newValue;
      // 设置的新值也要被监听
      observe(newValue);
    },
  });
}

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

console.log(observe(obj).value.a);
