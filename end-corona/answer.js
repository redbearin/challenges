endCorona = (recovers, newCases, activeCases) => Math.round(activeCases/(recovers - newCases));

const recovers = 30000;
const newCases = 25000;
const activeCases = 390205;

document.getElementById('ans').textContent = endCorona(recovers, newCases, activeCases);