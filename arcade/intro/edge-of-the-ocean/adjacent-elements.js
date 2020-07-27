function adjacentElementsProduct(arr) {
  return arr
    .slice(0, -1)
    .reduce(
      (acc, current, i) => Math.max(acc, current * arr[i + 1]),
      -Infinity
    );
}

function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

function adjacentElementsProduct(inputArray) {
  let prod = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
  }
  return prod;
}

const adjacentElementsProduct = (arr) => {
  let result = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];

    const sum = num * arr[i + 1];

    if (sum > result) {
      result = sum;
    }
  }
  return result;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
