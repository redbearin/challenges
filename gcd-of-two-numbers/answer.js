gcd = (n1, n2) => {
  let rem;
  if (n2 > n1) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  } 
  while (n2 > 0) {
    rem = n1 % n2;
    if (rem === 0) {
      return n2;
    }
    else {
      n1 = n2;
      n2 = rem;
    }
  }
}

const n1 = 17;
const n2 = 13;

document.getElementById('ans').textContent = gcd(n1, n2);
