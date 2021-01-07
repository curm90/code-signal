// https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5

function arrayMaxConsecutiveSum(arr, k) {
  let result = 0;
  let currentSum = 0;

  for (let i = 0; i < k - 1; i++) {
    currentSum += arr[i];
  }

  for (let i = k - 1; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > result) {
      result = currentSum;
    }

    currentSum -= arr[i - k + 1];
  }

  return result;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2), 8);
console.log(arrayMaxConsecutiveSum([2, 4, 10, 1], 2), 14);
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3), 9);
