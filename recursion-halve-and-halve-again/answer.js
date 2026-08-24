halveCount = (n1, n2) => {
  if (n1 <= n2) {
    return -1;
  }
  return 1 + halveCount(n1 / 2, n2);
}

const n1 = 1000;
const n2 = 3;

document.getElementById('ans').textContent = halveCount(n1, n2);