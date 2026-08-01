missingAngle = (a1, a2) => {
  if (180 - a1 - a2 > 90) {
    return "obtuse";
  }
  if (180 - a1 - a2 < 90) {
    return "acute";
  }
  return "right";
}

const a1 = 135;
const a2 = 11;

document.getElementById('ans').textContent = missingAngle(a1, a2);