decimalPart = num => num.toString().split('.').length > 1 ? +("." + num.toString().split('.')[1]) : 0;

const num = 1.2;

document.getElementById('ans').textContent = decimalPart(num);