// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/mCkmbxdMsMTjBc3Bm

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  // iterate over the inputArray
  for (let i = 0; i < inputArray.length; i++) {
    // if current elem is equal to elemToReplace
    if (inputArray[i] == elemToReplace) {
      // set the current elem to substitutionElem
      inputArray[i] = substitutionElem;
    }
  }
  // return inputArray
  return inputArray;
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((num) => {
    if (num == elemToReplace) {
      return substitutionElem;
    }
    return num;
  });
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((num) =>
    num == elemToReplace ? substitutionElem : num
  );
}

console.log(arrayReplace([1, 2, 1], 1, 3), [3, 2, 3]);
console.log(arrayReplace([1, 2, 3, 4, 5], 3, 0), [1, 2, 0, 4, 5]);
