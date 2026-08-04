kmtomiles = km => Math.round(km * 0.621371 * 100000)/100000;

const km = 6;

document.getElementById('ans').textContent = kmtomiles(km);