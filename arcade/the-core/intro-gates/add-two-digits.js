// https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66

function addTwoDigits(n) {
  const nums = n.toString().split('');
  return +nums[0] + +nums[1];
}

function addTwoDigits(n) {
  return parseInt(n / 10 + (n % 10));
}
