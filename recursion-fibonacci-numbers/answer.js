fib = num => {
  if  (num < 2) {
      return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const num = 8;

document.getElementById('ans').textContent = fib(num);