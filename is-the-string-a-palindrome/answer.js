ckPalindrome = str => str === str.split('').reverse().join('');

const str = "reviver";

document.getElementById('ans').textContent = ckPalindrome(str);