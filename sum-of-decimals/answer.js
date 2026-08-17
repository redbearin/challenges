floatSum = (n1, n2) => {
  return (n1 * 1000000 + n2 * 1000000)/1000000
}

const n1 = 1.234;
const n2 = 5.6789;

document.getElementById('ans').textContent = floatSum(n1, n2);
