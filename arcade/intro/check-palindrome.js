function checkPalindrome(str) {
    if (str.length === 1) return true
    const reverse = str.split('').reverse().join('')
    return reverse === str
}

console.log(checkPalindrome('ddgdd'))