swap = (num1, num2) => JSON.stringify([num2, num1]);

const num1 = 100;
const num2 = 200;

document.getElementById('ans').textContent = swap(100, 200);