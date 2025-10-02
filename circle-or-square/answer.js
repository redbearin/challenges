circle_or_square = (rad, area) => 2 * Math.PI * rad > Math.sqrt(area) * 4;

const rad = 16;
const area = 625;

document.getElementById('ans').textContent = circle_or_square(rad, area);