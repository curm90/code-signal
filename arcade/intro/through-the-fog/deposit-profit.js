// https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb

function depositProfit(deposit, rate, threshold) {
  // place to store the result
  let result = 0;
  // place to store the new total - initialized to desposit
  let newTotal = deposit;
  // loop while new total is less than threshold
  while (newTotal < threshold) {
    // get total increase = new total * rate / 100
    let totalIncrease = (newTotal * rate) / 100;
    // set the new total = new total + total increase
    newTotal += totalIncrease;
    // increment result
    result++;
  }
  // return result
  return result;
}

console.log(depositProfit(100, 20, 170), 3);
console.log(depositProfit(100, 1, 101), 1);
console.log(depositProfit(1, 100, 64), 6);
console.log(depositProfit(20, 20, 50), 6);
