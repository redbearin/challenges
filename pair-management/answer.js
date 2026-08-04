makePair = (num1, num2) => JSON.stringify([num1, num2]);

const num1 = 512124;
const num2 = 215;

document.getElementById('ans').textContent = makePair(num1, num2);