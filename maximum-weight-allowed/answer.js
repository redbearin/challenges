weightAllowed = (maxWt, pass, car) => maxWt >= (pass.reduce((acc, ele) => acc + ele, 0) + car) * .453592;

const maxWt = 3000;
const pass = [150, 201, 75, 88, 195];
const car = 1700;

document.getElementById('ans').textContent = weightAllowed(maxWt, pass, car);