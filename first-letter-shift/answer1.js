const shiftSentence = str => {
  const strArr = str.split(' ');
  const firstLtrLastWord = strArr[strArr.length - 1][0];

  // build new words for all but first word
  for (let i = strArr.length - 1; i > 0; i--) {
    strArr[i] = strArr[i - 1][0] + strArr[i].slice(1);
  }

  // build first word
  strArr[0] = firstLtrLastWord + strArr[0].slice(1);
  
  return strArr.join(' ');
};

const str = "create a function";

document.getElementById('ans').textContent = shiftSentence(str);