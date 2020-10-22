// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/QrCSNQWhnQoaK9KgK

function arithmeticExpression(a, b, c) {
  const add = a + b;
  const subtract = a - b;
  const divide = a / b;
  const multiply = a * b;

  return (
    add === c || subtract === c || divide === c || multiply === c
  );
}

function arithmeticExpression(a, b, c) {
  return a + b == c || a - b == c || a * b == c || a / b == c;
}

console.log(arithmeticExpression(2, 3, 5), true);
console.log(arithmeticExpression(8, 2, 4), true);
console.log(arithmeticExpression(8, 3, 2), false);
