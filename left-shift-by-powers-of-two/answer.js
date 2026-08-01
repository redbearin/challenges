shiftToLeft = (num, pow) => num * 2 ** pow;

const num = 46;
const pow = 6;

document.getElementById('ans').textContent = shiftToLeft(num, pow);