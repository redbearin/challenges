ageDifference = (fAge, sAge) => Math.abs(2 * sAge - fAge);

const fAge = 36;
const sAge = 7;

document.getElementById('ans').textContent = ageDifference(fAge, sAge);