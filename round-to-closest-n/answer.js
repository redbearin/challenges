const roundNumber = (num, n) => {
  const bottom = Math.floor(num/n);
  const actual = num/n;
  const top = Math.ceil(num/n);
  if (top - actual <= actual - bottom)
    return n * top;
  else
    return n * bottom;
}

const num = 133;
const n = 14;

document.getElementById('ans').textContent = roundNumber(num, n) 