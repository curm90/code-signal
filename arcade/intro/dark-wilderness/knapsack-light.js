// https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else if (weight2 <= maxW && value2 > value1) {
    return value2;
  } else if (weight1 <= maxW) {
    return value1;
  } else {
    return 0;
  }
}

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  );
}

console.log(knapsackLight(10, 5, 6, 4, 8), 10);
console.log(knapsackLight(10, 5, 6, 4, 9), 16);
console.log(knapsackLight(5, 3, 7, 4, 6), 7);
console.log(knapsackLight(10, 2, 11, 3, 1), 0);
