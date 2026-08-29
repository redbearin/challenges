outlierNumber = arr => {
  const evens = arr.filter(ele => ele % 2 === 0);
  if (evens.length === 1) {
    return evens[0];
  }
  const odds = arr.filter(ele => ele % 2 !== 0);
  return odds [0];
}
const arr = [4, 1, 3, 5, 9];

document.getElementById('ans').textContent = outlierNumber(arr);