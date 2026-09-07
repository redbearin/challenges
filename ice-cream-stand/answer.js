profit = (lower, upper) => {
  let gap = (upper - lower)/2;
  if (Number.isInteger(gap)) {
    return JSON.stringify([gap + lower, 100 - upper + gap]);
  }
  else {
    return JSON.stringify([Math.floor(gap) + lower + 1, 100 - upper + Math.floor(gap) + 1]);
  }
}
const lower = 0;
const upper = 1;

document.getElementById('ans').textContent = profit(lower, upper);