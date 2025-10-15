yenToUsd = JPY => Math.round(JPY / 107.5 * 100)/100;

const JPY = 649;

document.getElementById('ans').textContent = yenToUsd(JPY);