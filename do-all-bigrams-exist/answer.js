canFind = (bigrams, words) => {
  let idx = 0;
  let flag = false;
  while(idx < bigrams.length) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 1; j < words[i].length; j++) {
        if (bigrams[idx] === words[i][j - 1] + words[i][j]) {
          flag = true;
          break;
        }
      }
      if(flag) {
        break;
      }
    }
    if (!flag) {
      return false;
    }
    flag = false;
    idx++;
  }
  return true;
}

const bigrams = ["at", "be", "th", "au"]; 
const words = ["beautiful", "the", "hat"];

document.getElementById('ans').textContent = canFind(bigrams, words);