// https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3

function longestDigitsPrefix(str) {
  // place to store the result string
  let result = '';
  // turn string into an array
  const strArr = str.split('');
  // iterate over the array
  for (let i = 0; i < strArr.length; i++) {
    const currentItem = strArr[i];
    // if first item is not a number or is whitespace
    if (isNaN(currentItem) || currentItem === ' ') {
      // return empty string
      break;
    }
    // append current item to result string
    result += currentItem;
  }
  // return result string
  return result;
}

function longestDigitsPrefix(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const currentItem = str[i];

    if (isNaN(currentItem) || currentItem === ' ') {
      break;
    }
    result += currentItem;
  }
  return result;
}

function longestDigitsPrefix(str) {
  let result = '';

  for (const item of str) {
    if (isNaN(item) || item === ' ') {
      break;
    }
    result += item;
  }
  return result;
}

console.log(longestDigitsPrefix('123aa1'), '123');
console.log(longestDigitsPrefix('0123456789'), '0123456789');
console.log(
  longestDigitsPrefix('  3) always check for whitespaces'),
  ''
);
console.log(longestDigitsPrefix('12abc34'), '12');
