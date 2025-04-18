inchesToFeet = numIn => +(numIn/12).toFixed(0);

const numIn = 324;

document.getElementById('ans').textContent = inchesToFeet(numIn);