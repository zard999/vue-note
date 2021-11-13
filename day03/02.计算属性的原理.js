/*
 * @Author: your name
 * @Date: 2021-11-13 15:57:48
 * @LastEditTime: 2021-11-13 16:04:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-note\day03\02.计算属性的原理.js
 */
let Dep = null;

const obj = {};

defineReactive(obj, "a", 0);

defineComputed(obj, "b", function () {
  let a = this.a;
  return a + 1;
});

function defineReactive(obj, key, val) {
  const deps = [];
  Object.defineProperty(obj, key, {
    get() {
      if (Dep) {
        deps.push(Dep);
      }
      return val;
    },
    set(newVal) {
      val = newVal;
      deps.forEach((func) => func());
    },
  });
}

function defineComputed(obj, key, func) {
  func = func.bind(obj);
  let value;
  Dep = function () {
    value = func();
  };
  value = func();
  Dep = null;
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
  });
}

console.log(obj.b);
obj.a += 1;
console.log(obj.b);
obj.a += 1;
console.log(obj.b);
obj.a += 1;
console.log(obj.b);
obj.a += 1;
