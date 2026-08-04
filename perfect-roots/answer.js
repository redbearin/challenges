perfectRoots = num => 
  Number.isInteger(Math.pow(num, 1/2)) && 
  Number.isInteger(Math.pow(num, 1/4)) && 
  Number.isInteger(Math.pow(num, 1/8));

const num = 256;

document.getElementById('ans').textContent = perfectRoots(num);