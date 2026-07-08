rectangles = n => {
  return Math.pow((n * (n + 1))/2, 2);
}

const n = 3;

document.getElementById('ans').textContent = rectangles(n);