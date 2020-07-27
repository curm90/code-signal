// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function alternatingSums(a) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum1 += a[i];
    } else {
      sum2 += a[i];
    }
  }

  return [sum1, sum2];
}

function alternatingSums(a) {
  let result = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      result[0] += a[i];
    } else {
      result[1] += a[i];
    }
  }
  return result;
}

function alternatingSums(a) {}

console.log(alternatingSums([50, 60, 60, 45, 70]), [180, 105]);
