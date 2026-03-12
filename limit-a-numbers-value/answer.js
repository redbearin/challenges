limitNumber = (n, lower, upper) => {
  if (n <= lower) {
    return lower;
  }
  if (n >= upper) {
    return upper;
  }
  return n;
}

const n = 5;
const lower = 1;
const upper = 10;

document.getElementById('ans').textContent = limitNumber(n, lower, upper);