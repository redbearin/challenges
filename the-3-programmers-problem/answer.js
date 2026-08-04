programmers = (p1, p2, p3) => Math.max(p1, p2, p3) - Math.min(p1, p2, p3); 

const p1 = 147;
const p2 = 33;
const p3 = 526;

document.getElementById('ans').textContent = programmers(p1, p2, p3)