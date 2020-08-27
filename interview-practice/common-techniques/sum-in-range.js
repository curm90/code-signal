// https://app.codesignal.com/interview-practice/task/4MoqQLaw22nrzXbgs/description

// Too Slow :(
function sumInRange(nums, queries) {
  // place to store the mod
  const mod = 1e9 + 7;
  // place to store the sum
  let sum = 0;
  // iterate over queries
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];

    // iterate over nums from querie start to querie end
    for (let j = start; j <= end; j++) {
      // adding each number in nums to sum
      sum += nums[j];
    }
  }
  // return sum
  return (sum + mod) % mod;
}

console.log(
  sumInRange(
    [3, 0, -2, 6, -3, 2],
    [
      [0, 2],
      [2, 5],
      [0, 5],
    ]
  ),
  10
);
