specialReverse = (str, ltr) => {
  // break the string into an array of words
  let strArr = str.split(' ');
  // go word by word thru array
  for (let i = 0; i < strArr.length; i++) {
    // first letter of the word is a match
    if (strArr[i][0] === ltr) 
      // reverse word
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}

const str = "peter piper picked pickled peppers";
const ltr = "p";

document.getElementById('ans').textContent = specialReverse(str, ltr);