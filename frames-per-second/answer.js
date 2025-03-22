frames = (numFr, min) => numFr * min * 60;

const numFr = 10;
const min = 25;

document.getElementById('ans').textContent = frames(numFr, min);