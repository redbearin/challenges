isShapePossible = (sides, angles) => {
  if (sides.length < 3) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < angles.length; i++) {
    if (angles[i] > 180 || angles[i] <= 0) {
      return false;
    }
    sum += angles[i];
  }
  if ((sides - 2) * 180 === sum) {
    return true;
  }
  return false;
}

const sides = 5;
const angles = [500, 0, 20, 10, 10];

document.getElementById('ans').textContent = isShapePossible(sides, angles); 