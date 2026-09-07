shortestDistance = pts => {
  const ptsArr = pts.split(',');
  return Math.round(
    Math.sqrt(
      Math.pow(+ptsArr[3] - +ptsArr[1], 2) + 
      Math.pow(+ptsArr[2] - +ptsArr[0], 2)
    ) 
  * 100) 
  / 100;
}

const pts = "1,1,2,1";

document.getElementById('ans').textContent = shortestDistance(pts);