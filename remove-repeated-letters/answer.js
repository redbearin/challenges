removeRepeats = str => {
  let noRepeats = '';
  for (let i = 0; i < str.length; i++) {
    // letter at first index
    // letter different than prior letter
    // add to no repeats string
    if (i === 0 || 
        str[i] !== str[i - 1])
      noRepeats += str[i];
  }
  return noRepeats;
}

const str = "bookkeeper";

document.getElementById('ans').textContent = removeRepeats(str);