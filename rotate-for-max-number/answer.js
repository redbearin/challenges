rotateMaxNumber = num => +(num.toString().split('').sort((a, b) => b - a).join(''));

const num = 123;

document.getElementById('ans').textContent = rotateMaxNumber(num);