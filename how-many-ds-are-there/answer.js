countDs = str => str.toLowerCase().replace(/[^d]/g, '').length;
const str = "Debris was scattered all over the yard.";

document.getElementById('ans').textContent = countDs(str);