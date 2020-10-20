// https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW

function evenDigitsOnly(n) {
  const numsArr = n.toString().split('');

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

function evenDigitsOnly(n) {
  return n
    .toString()
    .split('')
    .every((num) => num % 2 === 0);
}

console.log(evenDigitsOnly(248622), true);
console.log(evenDigitsOnly(642386), false);
console.log(evenDigitsOnly(22244669), false);
