divisible = num => num % 100 === 0;

const num = 1000;

document.getElementById('ans').textContent = divisible(num);