afterNMonths = (yr, mons) => yr + mons/12;

const yr = 1444;
const mons = 60;

document.getElementById('ans').textContent = afterNMonths(yr, mons);