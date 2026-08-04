shiftLetters = (str, n) => {
  // remove spaces
  let noSpaces = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ')
      noSpaces += str[i];
  }
  // shift wo spaces
  let shiftedNoSpaces;
  if (n <= noSpaces.length)
    shiftedNoSpaces = noSpaces.slice(-n) + noSpaces.slice(0, -n);
  else
    shiftedNoSpaces = noSpaces.slice(-(n % noSpaces.length)) + noSpaces.slice(0, -(n % noSpaces.length));
  
  // add spaces to shifted
  let shiftedWSpaces = '';
  let idxshiftedNoSpaces = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      shiftedWSpaces += shiftedNoSpaces[idxshiftedNoSpaces];
      idxshiftedNoSpaces++;
    } 
    else {
      shiftedWSpaces += ' ';
    }
  }
  return shiftedWSpaces;
}

const str = "This is a test";
const n = 13;

document.getElementById('ans').textContent = shiftLetters(str, n);