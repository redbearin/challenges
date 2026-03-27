calculateFuel = num => num < 10 ? 100 : num * 10;

const num = 15;

document.getElementById('ans').textContent = calculateFuel(num);