howManyStickers = len => Math.pow(len, 2) * 6;

const len = 3;

document.getElementById('ans').textContent = howManyStickers(len);