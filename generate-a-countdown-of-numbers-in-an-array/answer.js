countdown = num => JSON.stringify(Array.from({ length: num + 1 }, (_, i) => num - i));

const num = 5;

document.getElementById('ans').textContent = countdown(num);