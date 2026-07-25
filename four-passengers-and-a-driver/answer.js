carsNeeded = pass => Math.ceil(pass/5);

const pass = 6;

document.getElementById('ans').textContent = carsNeeded(pass);