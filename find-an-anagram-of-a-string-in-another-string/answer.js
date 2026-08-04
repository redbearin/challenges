const anaStrStr = (word1, word2) => {
  let arr;
  // initialize to letter in word2 is in word1
  let ltrInc = true;
  // shift starting position in word2
  for (let i = 0; i < word2.length - word1.length; i++) {
    // create an array of letters from word2 at the new
    // starting position
    arr = [];
    // push the letters from word2 from the starting
    // position in word2 for the same numbers of 
    // letters in word1
    for (let j = i; j < word1.length + i; j++) {
      arr.push(word2[j]);
    }
    // check to see if all the letters in that
    // portion of word2 are in word1
    // if not set the flag that says you ran
    // into a letter that does not match
    for(let k = 0; k < word1.length; k++) {
      if (!arr.includes(word1[k])) {
        ltrInc = false;
        break;
      }
    }
    // if no letters that aren't included
    // there is a match
    if (ltrInc)
      return true;
    // reset to default condition where
    // all letters includedd
    ltrInc = true;
  }
  // no combination where all letters are included
  return false;
};

const word1 = "bag";
const word2 = "grab";

document.getElementById('ans').textContent = anaStrStr(word1, word2);