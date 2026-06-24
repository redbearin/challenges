sayWhat = obj => obj[1] + ' ' + obj[2] + ' ' + obj[3] + ' ' + obj[2];

const obj = { 1: "Mommy", 2: "please", 3: "help" };

document.getElementById('ans').textContent = sayWhat(obj); 