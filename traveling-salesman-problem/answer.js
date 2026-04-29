paths = num => {
  let prod = 1;
  while (num > 1) {
    prod *= num;
    num--;
  }
  return prod;
}
const num = 9;

document.getElementById('ans').textContent = paths(num);