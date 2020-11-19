// https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

function alphabeticShift(str) {
  return str
    .split('')
    .map((letter) => {
      if (letter === 'z') {
        return 'a';
      }
      return String.fromCharCode(letter.charCodeAt() + 1);
    })
    .join('');
}

console.log(alphabeticShift('crazy'), 'dsbaz');
