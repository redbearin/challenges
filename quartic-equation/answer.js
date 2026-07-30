quarticEquation = (a, b, c) => {
  const y1 = (-b + Math.sqrt(b**2 - 4*a*c))/2*a;
  const y2 = (-b - Math.sqrt(b**2 - 4*a*c))/2*a;
  if (y1 > 0 && y2 > 0) {
    if (y1 === y2 ) {
      return 2;
    }
    return 4;
  }
  if (y1 > 0 || y2 > 0) {
    return 2;
  }
  return 0;
}

const a = 1;
const b = -5;
const c = 4;

document.getElementById('ans').textContent = quarticEquation(a, b, c);