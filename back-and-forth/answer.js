const calculateArrowhead = moves => {
  let count = 0;
  // go through each item in the subarrays
  // and add or subtract from the count
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i].length; j++) {
      if (moves[i][j] === '>')
        count++;
      else
        count--;
    }
  }
  // equal positive and negative moves
  if (count === 0) 
    return '';
  let outcome = '';
  // positive count
  if (count < 0) {
    for (let i = 0; i > count; i--)  {
      outcome += '<';
    }
  }
  // negative count
  else {
    for (let i = 0; i < count; i++) {
      outcome += '>';
    }
  }
  return outcome;
};

const moves = [">>>", "<<<"];
document.getElementById('ans').textContent = calculateArrowhead(moves);