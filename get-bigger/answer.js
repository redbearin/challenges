const getBigger = (n1, n2) => n1 > n2 ? n1 : n2;

const n1 = 5;
const n2 = 10;

document.getElementById('ans').textContent = getBigger(n1, n2);