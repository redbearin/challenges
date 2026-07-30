addOddToN = num => {
  let sum = 0;
  for (let i = 1; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}

const num = 47;

document.getElementById('ans').textContent = addOddToN(num);