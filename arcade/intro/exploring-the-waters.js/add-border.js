// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

function addBorder(picture) {
  const result = [];
  let borderWidth = picture[0].length + 2;
  let border = '';

  while (borderWidth > 0) {
    border += '*';
    borderWidth--;
  }

  for (let i = 0; i < picture.length; i++) {
    result.push(`*${picture[i]}*`);
  }

  result.unshift(border);
  result.push(border);

  return result;
}

function addBorder(picture) {
  let border = '*'.repeat(picture[0].length + 2);

  return [border, ...picture.map((string) => `*${string}*`), border];
}

function addBorder(picture) {
  let border = picture[0].length + 2;

  return [
    '*'.repeat(border),
    ...picture.map((string) => `*${string}*`),
    '*'.repeat(border),
  ];
}

console.log(addBorder(['abc', 'ded']), [
  '*****',
  '*abc*',
  '*ded*',
  '*****',
]);
