// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/jZ4ZSiGohzFTeg4yb

function willYou(young, beautiful, loved) {
  const one = young && beautiful && !loved;
  const two = loved && !beautiful;
  const three = loved && !young;

  return one || two || three;
}

function willYou(young, beautiful, loved) {
  return (
    (young && beautiful && !loved) ||
    (loved && !beautiful) ||
    (loved && !young)
  );
}

function willYou(young, beautiful, loved) {
  return (young && beautiful) !== loved;
}

console.log(willYou(true, true, true), false);
console.log(willYou(true, false, true), true);
console.log(willYou(false, false, false), false);
