lcmThree = arr => {
  const [a, b, c] = arr;
  
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  const lcmTwo = (a, b) => (a * b) / gcd(a, b);

  return lcmTwo(lcmTwo(a, b), c);
}

const arr = [5, 7, 13];

document.getElementById('ans').textContent = lcmThree(arr);