millionInMonth = (base, inc) => {
  let total = base;
  let salary = base;
  let months = 1;
  while (total < 1000000) {
    salary = salary * inc;
    total += salary;
    months++;
  }
  return months;
}

const base = 10;
const inc = 2;

document.getElementById('ans').textContent = millionInMonth(base, inc);