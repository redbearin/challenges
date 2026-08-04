factFact = num => {
  let total = 1;
  while (num > 1) {
    for (let i = num; i >= 1; i--) {
      total *= i;
    }
    num--;
  }
  return total;
}

const num = 4;

document.getElementById('ans').textContent = factFact(num);