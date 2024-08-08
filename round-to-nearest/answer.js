roundNearest = (num, inc) => {
  if (!inc) {
    return Math.round(num);
  }
  return Math.round(num/inc) * inc;
}

const num = 17;
const inc = 10;

document.getElementById('ans').textContent = roundNearest(num, inc);

