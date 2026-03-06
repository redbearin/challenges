AND = (n1, n3) => +(n1 && n3);
OR = (n1, n2) => +(n1 || n2);
NOT = (n1) => n1 === 0 ? 1 : 0;

const n1 = 1;
const n2 = 0;
const n3 = 1;

document.getElementById('ans').textContent = AND(n1, n3);
document.getElementById('ans1').textContent = OR(n1, n2);
document.getElementById('ans2').textContent = NOT(n1);