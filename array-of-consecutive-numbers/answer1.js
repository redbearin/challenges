getSequence = (n1, n2) => {
  const arr = [];
  for (let i = n1; i <= n2; i++) {
    arr.push(i);
  }
  return JSON.stringify(arr);
}

const start = 98
const end = 100;

document.getElementById('ans').textContent = getSequence(start, end);