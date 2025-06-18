matchHouses = num => num === 0? 0: 6 * num - (num - 1);

const num = 4;

document.getElementById('ans').textContent = matchHouses(num);