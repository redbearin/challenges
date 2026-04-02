profitableGamble = (prob, prize, pay) => prob * prize > pay;

const prob = 0.2;
const prize = 50;
const pay = 9;

document.getElementById('ans').textContent = profitableGamble(prob, prize, pay); 