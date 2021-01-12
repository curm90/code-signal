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

function sumInRange(nums, queries) {
  let partialSum = 0;
  const mod = 1e9 + 7;
  const prefixSums = nums.map((num) => (partialSum += num));

  return queries.reduce((total, query) => {
    total += prefixSums[query[1]] - (prefixSums[query[0] - 1] || 0);
    return total < 0 ? total + mod : total % mod;
  }, 0);
}

function sumInRange(nums, queries) {
  const frequencyDeltas = Array(nums.length + 1).fill(0); // Create `frequencyDeltas` array to represent delta of each element from last attempt
  let frequency = 0;
  let total = 0;
  let mod = 1000000007; // 10^9 + 7
  let i;

  // For each range in `queries`
  for (i = 0; i < queries.length; i++) {
    frequencyDeltas[queries[i][0]]++; // Add 1 to the index of `frequencyDeltas` of the start of the range
    frequencyDeltas[queries[i][1] + 1]--; // Subtract 1 from the index of `frequencyDeltas` of the end of the range
  }

  // For each delta in `frequencyDeltas`
  for (i = 0; i < nums.length; i++) {
    frequency += frequencyDeltas[i]; // Add the delta to a running "delta total" that infers the frequency
    total += nums[i] * frequency; // Add to the total: the corresponding value of `nums` multiplied by this frequency
  }

  return ((total % mod) + mod) % mod;
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
