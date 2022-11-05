coneVolume = (height, radius) => {
  if (height === 0 || radius === 0)
    return 0;
  return (1 / 3 * Math.PI * Math.pow(radius, 2) * height).toFixed(2);
}

const height = 18;
const radius = 0;

document.getElementById('ans').textContent = coneVolume(height, radius);