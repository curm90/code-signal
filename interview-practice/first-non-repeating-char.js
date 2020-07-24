// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC/description

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (s.indexOf(letter) === i && s.indexOf(letter, i + 1) === -1) {
      return letter;
    }
  }
  return '_';
}

function firstNotRepeatingCharacter(s) {
  const cache = {};

  for (const letter of s) {
    cache[letter] ? cache[letter]++ : (cache[letter] = 1);
  }

  for (const letter of s) {
    if (cache[letter] === 1) {
      return letter;
    }
  }

  return '_';
}
console.log(firstNotRepeatingCharacter('abacabad'), 'c');
console.log(firstNotRepeatingCharacter('abacabaabacaba'), '_');
