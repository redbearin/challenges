xPronounce = str => {
  let pronStr = '';
  // go element by element thru string
  for (let i = 0; i < str.length; i++) {
    // letter is an x
    if (str[i] === 'x' || str[i] === 'X') {
      // x at beginning of word
      if (str[i-1] === ' ' || undefined) {
        // x a single letter wordd
        if (str[i+1] === ' ')
          pronStr += 'ecks';
        // x at beginning of multi letter word
        else 
          pronStr += 'z';
      }
      // x in middle of word or at end of word
      else
        pronStr += 'cks'
    }
    // not an x
    else 
      pronStr += str[i];
  }
  return pronStr;
}

const str = "OMG x box unboxing video x D";

document.getElementById('ans').textContent = xPronounce(str);