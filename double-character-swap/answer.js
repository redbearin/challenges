doubleSwap = (str, c1, c2) => {
  // final string
  let changed = '';
  // go element by element thru str
  // and make changes
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1)
      changed += c2;
    else if (str[i] === c2)
      changed += c1;
    else
      changed += str[i];
  }
  return changed;
}

const str = "128 895 556 788 999";
const c1 = '8';
const c2 = '9'

document.getElementById('ans').textContent = doubleSwap( str, c1, c2);