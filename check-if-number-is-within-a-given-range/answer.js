isInRange = (num, limits) => num >= limits.min && num <= limits.max;

const limits = { min: 6, max: 10 };
const num = 12; 

document.getElementById('ans').textContent = isInRange(num, limits);