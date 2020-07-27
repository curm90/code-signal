function checkPalindrome(str) {
  if (str.length === 1) return true;
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}

function checkPalindrome(str) {
  return str == str.split('').reverse().join('');
}

const checkPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const checkPalindrome = (str) => {
  const charArr = str.split('');
  for (let letter of charArr) {
    if (letter !== charArr.pop()) {
      return false;
    }
  }
  return true;
};

const checkPalindrome = (str) => {
  return str
    .split('')
    .every((letter, i) => letter === str[str.length - 1 - i]);
};

console.log(checkPalindrome('ddgdd'));
console.log(checkPalindrome('ddgddd'));
