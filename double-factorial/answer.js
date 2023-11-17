doubleFactorial = num => {
  return num <= 1 ?
         1:
         num * doubleFactorial(num - 2);
}

const num = 9;

document.getElementById('ans').textContent = doubleFactorial(num);