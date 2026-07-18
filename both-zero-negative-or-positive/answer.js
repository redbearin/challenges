both = (n1, n2) => n1 > 0 && n2 > 0 || n1 < 0 && n2 < 0 || n1 === 0 && n2 === 0; 

const n1 = 0;
const n2 = 0; 

document.getElementById('ans').textContent = both(n1, n2);