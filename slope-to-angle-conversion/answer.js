convert = slope => {
  return Math.round(90 - Math.atan(slope) * 180 / Math.PI);
}

const slope = 0;

document.getElementById('ans').textContent = convert(slope);