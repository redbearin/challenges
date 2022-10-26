arrayOfMultiples = (num, len) => {
  const multiples = [];
  for (let i = 1; i <= len; i++) {
    multiples.push(num * i);
  }
  return JSON.stringify(multiples);
}
const num = 7;
const len = 5;

document.getElementById('ans').textContent = arrayOfMultiples(num, len) 