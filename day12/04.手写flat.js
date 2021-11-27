function flatten(arr) {
  let result = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result = result.concat(arr[i]);
    }
  }
  return result;
}

const arr = [1, [2, [3, 4]]];
console.log(flatten(arr));


