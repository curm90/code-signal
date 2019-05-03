function checkPalindrome(str) {
    if (str.length === 1) return true
    const reverse = str.split('').reverse().join('')
    return reverse === str
}

function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}


console.log(checkPalindrome('ddgdd'))