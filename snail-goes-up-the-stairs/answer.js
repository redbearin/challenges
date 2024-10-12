totalDistance = (htStep, lenStep, htTower) => {
  return Math.round((htTower + (htTower/htStep * lenStep)) * 10)/10;
}

const htStep = 0.2;
const lenStep = 0.4;
const htTower = 100;

document.getElementById('ans').textContent = totalDistance(htStep, lenStep, htTower);