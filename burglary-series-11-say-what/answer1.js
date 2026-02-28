sayWhat = obj => Object.values(obj).join(' ') + ' ' + obj[2];

const obj = { 1: "Mommy", 2: "please", 3: "help" };

document.getElementById('ans').textContent = sayWhat(obj); 