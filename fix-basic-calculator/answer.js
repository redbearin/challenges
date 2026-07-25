basicCalculator = (a, o, b) => {
  if (o === '*') {
    return a * b;
  } 
  if (o === "-") {
    return a - b;
  } 
  if (o === '+') {
    return a + b;
  }
  if (o === '/') {
    if (b === 0) {
      return 'null';
    }
    return a / b;
  }
  return 'null';
}
  

const a = 1;
const o = 'x';
const b = 0;

document.getElementById('ans').textContent = basicCalculator(a, o, b);