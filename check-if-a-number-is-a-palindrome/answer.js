isPalindrome = num => num === +num.toString().split('').reverse().join('');

const num = 838;
document.getElementById('ans').textContent = isPalindrome(num);