centroid = (x1, y1, x2, y2, x3, y3) => {
  if ((y2-y1)/(x2-x1) === (y3-y2)/(x3-x2)) {
    return false;
  }
  return JSON.stringify([Math.round((x1 + x2 + x3) * 100 /3)/100, Math.round((y1 + y2 + y3) * 100 /3)/100]);
}

const x1 = 0;
const y1 = 0;
const x2 = 3;
const y2 = 0;
const x3 = 3;
const y3 = 3;

document.getElementById('ans').textContent = centroid(x1, y1, x2, y2, x3, y3);