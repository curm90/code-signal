// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function palindromeRearranging(inputString) {
  const letterFrequencies = {};
  let palindromeSum = 0;

  for (let i = 0; i < inputString.length; i++) {
    const currentLetter = inputString[i];

    letterFrequencies[currentLetter] =
      letterFrequencies[currentLetter] || 0;
    letterFrequencies[currentLetter]++;
  }

  for (const letterCount in letterFrequencies) {
    palindromeSum += letterFrequencies[letterCount] % 2;
  }

  return palindromeSum < 2;
}

console.log(palindromeRearranging('aabb'), true);
console.log(
  palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'),
  false
);
console.log(palindromeRearranging('abbcabb'), true);
console.log(palindromeRearranging('zyyzzzz'), true);
