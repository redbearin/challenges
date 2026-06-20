journeyDistance = cost => 1 + (cost - 3)/2;

const cost = 9;

document.getElementById('ans').textContent = journeyDistance(cost);