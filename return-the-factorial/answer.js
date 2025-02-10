factorial = num => {
  return num === 0 ?
  1 :
  num * factorial(num - 1);
}

const num = 5;

document.getElementById('ans').textContent = factorial(num);