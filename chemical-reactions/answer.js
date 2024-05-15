chemicalReactions = (C, H, O) => {
  const molecules = ['*','*','*'];

  if (O >= 2 * Math.floor(H/2) - Math.floor(H/2)) {
    molecules[0] = (Math.floor(H/2));
    O -= Math.floor(H/2);
    H -= 2 * Math.floor(H/2);
  }
  else {
    molecules[0] = O;
    O = 0;
    H -= 2 * O;
  }

  if (C >= 2 * Math.floor(O/2) - Math.floor(O/2)) {
    molecules[1] = (Math.floor(O/2));
    C -= Math.floor(O/2);
    O -= 2 * Math.floor(O/2);
  }
  else {
    molecules[1] = C;
    C = 0;
    O -= 2 * C;
  }

  if (C >= 4 * Math.floor(H/4) - Math.floor(H/4)) {
    molecules[2] = (Math.floor(H/4));
  }
  else {
    molecules[2] = C;
  }
  
  return JSON.stringify(molecules);
}

const C = 113;
const H = 0;
const O = 52;

document.getElementById('ans').textContent = chemicalReactions(C, H, O);