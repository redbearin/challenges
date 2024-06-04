findVertex = (a, b, c) => {
  let k = -(Math.pow(b, 2) - (4*a*c))/(4*a);
  if (k === -0) {
    k = 0;
  }
  return JSON.stringify([-b/(a*2), k]);
}

const a = 1;
const b = 0;
const c = 25;

document.getElementById('ans').textContent = findVertex(a, b, c);
