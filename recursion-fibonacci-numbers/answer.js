fib = num => {
  if  (num < 2) {
      return num;
  }
  return fib(num - 1) + fib(num - 2);
}

const num = 8;

document.getElementById('ans').textContent = fib(num);