evenlyDivisible = (beg, end, div) => {
  let sum = 0;
  if (div > end || div < beg) {
    return 0;
  }
  for (let i = beg; i <= end; i++) {
    if (i % div === 0) {
      sum += i;
    }
  }
  return sum;
}

const beg = 1;
const end = 10;
const div = 3;

document.getElementById('ans').textContent = evenlyDivisible(beg, end, div)