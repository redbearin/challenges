notNotNot = (times, bool) => times % 2 === 0 ? bool : !bool;

const times = 6;
const bool = true;

document.getElementById('ans').textContent = notNotNot(times, bool);