volShell = (r1, r2) => {
  // determine biggest and smallest radai
  let rBig, rSmall;
  if (r1 === r2)
    return 0;
  if (r1 > r2) {
    rBig = r1;
    rSmall = r2;
  }
  else {
    rBig = r2;
    rSmall = r1;
  }
  return (4/3 * Math.PI * (Math.pow(rBig, 3) - Math.pow(rSmall, 3))).toFixed(3);
}

const r1 = 3;
const r2 = 800;

document.getElementById('ans').textContent = volShell(r1, r2);