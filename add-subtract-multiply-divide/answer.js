operation = (n1, n2) => {
  if (n1 + n2 === 24) {
    return "added";
  }
  if (n1 - n2 === 24) {
    return "subtracted";
  }
  if (n1 * n2 === 24) {
    return "multiplied";
  }
  if (n1 / n2 === 24) {
    return "divided";
  }
  return "null";
}

const n1 = 25;
const n2 = 2;

document.getElementById('ans').textContent = operation(n1, n2);