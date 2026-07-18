fib = num => (num < 2 ? num : fib(num - 1) + fib(num - 2));

const num = 8;

document.getElementById('ans').textContent = fib(num);
