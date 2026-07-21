randomInt = (min, max) => Math.floor((Math.random() * (max - min + 1) + min));

const min = 5;
const max = 9;

document.getElementById('ans').textContent = randomInt(min, max);