rightTriangle = (a, b, c) => {
  if (a < 0 || b < 0 || c < 0) {
    return false;
  }
  if (a > b && a > c) {
    if (b**2 + c**2 === a**2) {
      return true;
    }
  }
  if (b > a && b > c) {
    if (a**2 + c**2 === b**2) {
      return true;
    }
  }
  if (c > a && c > b) {
    if (a**2 + b**2 === c**2) {
      return true;
    }
  }
  return false;
}

const a = 145;
const b = 105;
const c = 100;

document.getElementById('ans').textContent = rightTriangle(145, 105, 100);