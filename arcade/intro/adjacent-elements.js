function adjacentElementsProduct(arr) {
  return arr.slice(0, -1)
  .reduce((acc, current, i) => Math.max(acc, current * arr[i + 1]), -Infinity)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
