const rectangleInCircle = (width, height, radius) => {
  if (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) === 2 * radius)
    return true;
  else
    return false;
};

const width = 4;
const height = 7;
const radius = 4;

document.getElementById('ans').textContent = rectangleInCircle(width, height, radius);