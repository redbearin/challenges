futurePeople = (base, perMon) => base + perMon * 12 * 30;

const base = 256;
const perMon = 2;

document.getElementById('ans').textContent = futurePeople(base, perMon);