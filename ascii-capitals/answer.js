averageASCII = str => {
  // split the str into an arr of words
  let strArr = str.split(' ');
  const charSums = [];
  let avg;
  // go word by word
  for (let i = 0; i < strArr.length; i++) {
    let wordCharSum = 0;
    // ltr by ltr thru word
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      // if a letter add the char code amount to the wordCharSum
      if (strArr[i].charCodeAt(j) > 64 && strArr[i].charCodeAt(j) < 91 || strArr[i].charCodeAt(j) > 96 &&
          strArr[i].charCodeAt(j) < 123) {
        wordCharSum += strArr[i].charCodeAt(j);
      }
    }
    // add the word sum to the char sums array
    charSums.push(wordCharSum);
  }
  // calc the char code avg for the words
  avg = charSums.reduce((val, acc) => val + acc)/strArr.length;
  // change words that have char code sum higher than avg to capital letters
  for (let i = 0; i < charSums.length; i++) {
    if (charSums[i] > avg)
      strArr[i] = strArr[i].toUpperCase();
  }
  // return the modified str
  return strArr.join(' ');
} 

const str = "Edabit helps you learn in bitesize chunks";

document.getElementById('ans').textContent = averageASCII(str);