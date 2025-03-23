frames = (numFr, min) => numFr * min * 60;

const numFr = 10;
const min = 30;

document.getElementById('ans').textContent = frames(numFr, min);