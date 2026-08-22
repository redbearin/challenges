validRondo = code => {
  // more than 2 characters
  // first and last ltrs 'A'
  if (code.length > 2 && 
      code[0] === 'A' && 
      code[code.length - 1] === 'A') {
    // remove As 
    const othLtrs = code.split('A').join('');
    // make sure no gaps between letters
    for (let i = 1; i < othLtrs.length; i++) {
      // gap between letters
      if (othLtrs.charCodeAt(i) - othLtrs.charCodeAt(i-1) !== 1) 
        return false;
    }
    return true;
  }
  // less than 3 characters
  // or first or last letter not an A
  else
    return false;
}
const code = "ABBACCA";

document.getElementById('ans').textContent = validRondo(code);