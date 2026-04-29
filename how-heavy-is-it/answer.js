weight = (r, h) => {
  return Math.round(Math.PI * r**2 * h * Math.pow(.1,3) * 100)/100;
}

const r = 4; //cm
const h = 10; //cm

document.getElementById('ans').textContent = weight(r, h);