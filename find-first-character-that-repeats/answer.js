firstRepeat = str => {
  const ltrCounts = {};
  // info on the second instance of a letter
  let index = Infinity;
  let ltr = '';
  // go letter by letter thru str
  for (let i = 0; i < str.length; i++)  {
    // letter already exists in ltrCounts object
    if (ltrCounts[str[i]])
      ltrCounts[str[i]] = ltrCounts[str[i]] + 1;
    // letter does not exist in ltrCounts object
    else 
      ltrCounts[str[i]] = 1; 
    // second instance of letter
    // save index and ltr
    if (ltrCounts[str[i]] === 2 && i < index) {
      index = i; 
      ltr = str[i];
    }
  }
  // no letter is repeated
  if (ltr === '')
    return -1;
  // at least one letter repeated
  return ltr;
}

const str = "Isildur";

document.getElementById('ans').textContent = firstRepeat(str);