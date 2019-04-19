function adjacentElementsProduct(arr) {
  return arr.slice(0, -1)
  .reduce((max, n, i) => Math.max(max, n * arr[i + 1]), -Infinity)
}



console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
