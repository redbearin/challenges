squareAreasDifference = radius => ((2 * radius) ** 2) - (Math.sqrt((radius * 2) ** 2 / 2) ** 2);

const radius = 7;

document.getElementById('ans').textContent = squareAreasDifference(radius);