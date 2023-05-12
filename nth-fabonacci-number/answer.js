fibonacci = n => {
  let secondToLast = BigInt(0);
  let last = BigInt(1);
  let count = 2;
  let temp;
  while (count <= n) {
    temp = last;
    last = BigInt(last + secondToLast);
    secondToLast = temp;
    count++;
  }
  return last + "";
}

const n = 200;

document.getElementById('ans').textContent = fibonacci(n);
