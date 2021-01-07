// https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ

function differentSymbolsNaive(s) {
  const set = new Set(s);
  return set.size;
}

function differentSymbolsNaive(s) {
  return new Set(s).size;
}

console.log(differentSymbolsNaive('cabca'), 3);
console.log(differentSymbolsNaive('aba'), 2);
console.log(differentSymbolsNaive('ccccccccc'), 1);
