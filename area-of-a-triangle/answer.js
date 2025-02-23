triArea = (b, h) => {
  return b * h / 2;
}

const b = 7;
const h = 4;

document.getElementById('ans').textContent = triArea(b, h);