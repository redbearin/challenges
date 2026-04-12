footballPoints = (wins, draws, losses) => wins * 3 + draws;

const wins = 3;
const draws = 4;
const losses = 2;

document.getElementById('ans').textContent = footballPoints(wins, draws, losses);