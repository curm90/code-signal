// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function sortByHeight(arr) {
  const filteredArr = arr.filter((num) => num !== -1);
  filteredArr.sort((a, b) => a - b);

  let filteredArrIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = filteredArr[filteredArrIndex];
      filteredArrIndex++;
    }
  }
  return arr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]), [
  -1,
  150,
  160,
  170,
  -1,
  -1,
  180,
  190,
]);
