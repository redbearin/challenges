findFactors = num => JSON.stringify(Array.from({length: num}, (_, i) => i + 1).filter(v => num % v === 0));

const num = 9;

document.getElementById('ans').textContent = findFactors(num);

