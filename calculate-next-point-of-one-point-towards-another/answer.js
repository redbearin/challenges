getNextPosition = (pt1, pt2, dist) => {
  const angle = Math.abs(Math.atan((pt2.y - pt1.y) / (pt2.x - pt1.x)));
  console.log((pt2.y - pt1.y))
  console.log((pt2.x - pt1.x))
  console.log (angle)
  const newLoc = {};
  if (pt2.x < pt1.x) {
    newLoc.x = Math.round(dist * Math.cos(angle) - pt1.x);
  }
  else {
    newLoc.x = Math.round(dist * Math.cos(angle) + pt1.x);
  }
  if (pt2.y < pt1.y) {
    newLoc.y = Math.round(dist * Math.sin(angle) - pt1.y);
  }
  else {
    newLoc.y = Math.round(dist * Math.sin(angle) + pt1.y);
  }
  return JSON.stringify(newLoc);
}

const pt1 = {x: 250, y: 10}
const pt2 = {x: -20, y: 35};
const dist = 10;

document.getElementById('ans').textContent = getNextPosition(pt1, pt2, dist);