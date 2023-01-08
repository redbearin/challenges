collatz = n => {
  let steps = 0;
  while (n !== 1) {
    // odd
    if (n % 2) 
      n = n * 3 + 1;
    // even
    else
      n = n / 2;
    // increment step count
    steps++;
  }
  return steps;
}
const n = 2;

document.getElementById('ans').textContent = collatz(n);