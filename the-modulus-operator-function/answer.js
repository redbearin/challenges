mod = (dividend, divisor) => dividend - (Math.floor(dividend / divisor) * divisor);

const dividend = 218;
const divisor = 5;

document.getElementById('ans').textContent = mod(dividend, divisor);