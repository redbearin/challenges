collatz = num => {
  let count = 0;
  while (num !==1) {
    count++;
    num % 2 ?
      num = num * 3 + 1:
      num = num / 2;
  }
  return count;
}

const num = 3;

document.getElementById('ans').textContent = collatz(num);
