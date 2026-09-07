getDistance = (pt1, pt2) => {
  return Math.round (Math.sqrt(
          Math.pow(Math.abs(pt1.x - pt2.x), 2) + 
          Math.pow(Math.abs(pt1.y - pt2.y), 2)
         ) * 1000) / 1000;
}

const pt1 = {x: -2, y: 1};
const pt2 = {x: 4, y: 3};

document.getElementById('ans').textContent = getDistance(pt1, pt2);