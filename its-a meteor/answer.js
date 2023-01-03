willHit = (eqn, pt) => {
  // split the eqn string into an array of parts
  const eqnArr = eqn.split(' ');
  // mx - b
  if (eqnArr[3] === '-') {
    // multiply m * x value, subtract b value and check if 
    // equal to y value
    if ((+eqnArr[2].slice(0,-1) * pt[0]) - +eqnArr[4] === pt[1])
      return true;
    else
      return false;
  }
  // mx + b
  else {
    // multiply m * x value, add b value and check if 
    // equal to y value
    if ((+eqnArr[2].slice(0,-1) * pt[0]) + +eqnArr[4] === pt[1])
      return true;
    else
      return false;
  }
}
const eqn = "y = 2x + 6";
const pt = [3, 2];

document.getElementById('ans').textContent = willHit(eqn, pt);