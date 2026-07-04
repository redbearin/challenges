floatSum = (a, b) => Math.round((a + b) * 1e12) / 1e12; 

const a = 1.234;
const b =  5.6789;

document.getElementById('ans').textContent = floatSum(a, b);