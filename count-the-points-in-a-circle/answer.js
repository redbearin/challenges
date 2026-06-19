pointsInCircle = (arr, cX, xY, r) => {
  const xMax = cX + r;
  const xMin = cX - r;
  const yMax = cY + r;
  const yMin = xY - r;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].x < xMax && 
        arr[i].x > xMin && 
        arr[i].y < yMax && 
        arr[i].y > yMin) {
      count++;
    }
  }
  return count;
}

const arr = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 5 },
  { x: 10, y: 10 }
];
const cX = 0;
const cY = 0;
const r = 5;

document.getElementById('ans').textContent = pointsInCircle(arr, cX, cY, r);