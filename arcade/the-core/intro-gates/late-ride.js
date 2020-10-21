// https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function lateRide(n) {
  let total = 0;
  const hours = Math.floor(n / 60).toString();
  const minutes = (n % 60).toString();

  hours.split('').forEach((num) => {
    total += +num;
  });

  minutes.split('').forEach((num) => {
    total += +num;
  });

  return total;
}

function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;

  const result = (hours + '' + minutes).split('');

  return parseInt(
    result.reduce(
      (total, current) => parseInt(total) + parseInt(current)
    )
  );
}

function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;

  const result = (hours + '' + minutes).split('');

  return parseInt(
    result.reduce((total, current) => +total + +current)
  );
}

console.log(lateRide(240), 4);
console.log(lateRide(808), 14);
console.log(lateRide(1439), 19);
