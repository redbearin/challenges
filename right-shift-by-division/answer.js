shiftToRight = (x, y) => {
  return Math.floor(x / Math.pow(2, y));
}

const x = 3777;
const y = 6;

document.getElementById('ans').textContent = shiftToRight(x, y); 