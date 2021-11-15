let temp;
const obj = {};
function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    get() {
      return val;
    },
    set(newValue) {
      if (val === newValue) {
        return;
      }
      val = newValue;
    },
  });
}

defineReactive(obj, "a", 10);

// obj.a++;
console.log(obj.a);
