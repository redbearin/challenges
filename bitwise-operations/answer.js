bitwiseAND = (n1, n2) => {
  return parseInt(n1.toString(2) & n1.toString(2), 2);
}

const n1 = 7;
const n2 = 12;

document.getElementById('ans').textContent = bitwiseAND(n1, n2);