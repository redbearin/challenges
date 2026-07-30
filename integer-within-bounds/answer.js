intWithinBounds = (num, lower, upper) => {
  return Number.isInteger(num) ?
    num >= lower && num < upper :
    false;
}

const num = 4.5;
const lower = 3;
const upper = 8;

document.getElementById('ans').textContent = intWithinBounds(num, lower, upper);