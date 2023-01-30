brackets = str => {
  // left bracket count
  countLeft = 0;
  // right bracket count
  countRight = 0;
  // go element by element through str
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(')
      countLeft++;
    if (str[i] === ')') {
      countRight++;
      // to have right brackets you always 
      // have to have >= left brackets
      if (countLeft < countRight)
        return false;
    }
  }
  // left and right bracket counts must match
  if (countLeft !== countRight)
    return false;
  return true;
}

const str = "cos";

document.getElementById('ans').textContent = brackets(str);