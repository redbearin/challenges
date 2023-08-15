rectangleInCircle = (len, wid, rad) => {
  return Math.sqrt(Math.pow(len, 2) + Math.pow(wid, 2)) <= 2 * rad ?
  true:
  false;
}

const len = 5
const wid = 9
const rad = 5

document.getElementById('ans').textContent = rectangleInCircle(len, wid, rad);