// https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov

function firstDigit(str) {
  // turn string into an array
  const strArr = str.split('');
  // iterate over array
  for (const item of strArr) {
    if (item === ' ') {
      continue;
    }

    const isNumber = !isNaN(Number(item));
    // if current item converted to a number is equal to a number
    if (isNumber) {
      // return current item
      return item;
    }
  }
}

function firstDigit(str) {
  return str.match(/\d/)[0];
}

function firstDigit(str) {
  return str[str.search(/\d/)];
}

console.log(firstDigit('var_1__Int'), '1');
console.log(firstDigit('q2q-q'), '2');
console.log(firstDigit('0ss'), '0');
console.log(firstDigit('_Aas_23'), '2');
console.log(firstDigit('a a_933'), '9');
