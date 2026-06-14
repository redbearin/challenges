nextEdge = (num1, num2) => {
  return num1 + num2 - 1;
}

const num1 = 8;
const num2 = 10;

document.getElementById('ans').textContent = nextEdge(num1, num2);