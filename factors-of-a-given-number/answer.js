findFactors = num => JSON.stringify(Array.from(Array(num + 1), (_, i) => i).filter(i => num % i === 0));

const num = 12; 

document.getElementById("ans").textContent = findFactors(num);