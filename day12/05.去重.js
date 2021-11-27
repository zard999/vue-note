function remove(arr) {
  const map = {};

  for (const num of arr) {
    map[num] = true;
  }

  return Object.keys(map);
}

const arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5];
console.log(remove(arr));
console.log([...new Set(arr)]);
