areaOfHexagon = s => Math.round(3 * Math.sqrt(3) * s ** 2 / 2 * 10)/10;

const s = 2;

document.getElementById('ans').textContent = areaOfHexagon(s);