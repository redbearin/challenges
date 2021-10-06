const shiftSentence = str => {
  // creat an array from the str
  const strArr = str.split(' ');
  let final = [];
  // build the elements of the final array
  // add a placeholder to each
  for(let i = 0; i < strArr.length; i++) {
    final.push('*');
  }
  // build new words (take first letter from word
  // and move it to the next word) and move the
  // new word to the final array
  for (let i = 0; i < strArr.length; i++) {
    if (i < strArr.length - 1) {
      final[i+1] = strArr[i][0] + strArr[i+1].slice(1);
    }
    else 
      final[0] = strArr[i][0] + strArr[0].slice(1);
  }
  return final.join(' ');
};

const str = "the output is not very legible";

document.getElementById('ans').textContent = shiftSentence(str);