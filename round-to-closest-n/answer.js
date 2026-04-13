roundNumber = (num, n) => {
  const times = Math.floor(num / n);
  if (num - n * times < n * (times + 1) - num) {
    return n * times;
  }
  return n * (times + 1);
}

const num = 33;
const n = 25;

document.getElementById('ans').textContent = roundNumber(num, n);
