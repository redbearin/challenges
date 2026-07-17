numberTransform = (n, m) => {
  if (n === m) {
    return 0;
  }
  let count = 0;
  while (n < Infinity) {
    // negative
    if (n % 2) {
      n = (n - 1) / 2;
      count++;
    }
    // positive
    else {
      n = n * 2;
      count++;  
    }
    if (n === m) {
      return count;
    }
  }
}


const n = 3;
const m = 8;

document.getElementById('ans').textContent = numberTransform(n, m);

