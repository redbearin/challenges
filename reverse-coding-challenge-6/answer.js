const mysteryFunc = num => num.toString().split('').reduce((acc, val) => acc * val,1);

const num = 832;

document.getElementById('ans').textContent = mysteryFunc(num);