inchesToFeet = numIn => Math.floor(numIn/12);

const numIn = 324;

document.getElementById('ans').textContent = inchesToFeet(numIn);