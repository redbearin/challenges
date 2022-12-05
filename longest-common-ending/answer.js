longestCommonEnding = (word1, word2) => {
  // reverse letters
  word1ArrRev = word1.split('').reverse();
  word2ArrRev = word2.split('').reverse();
  
  // endings that match
  let ending = '';

  for (let i = 0; i < word1.length; i++) {
    // out of letters in one word
    if (word1ArrRev[i] === undefined || 
        word2ArrRev[i] === undefined) 
      break;
    // letters don't match
    if (word1ArrRev[i] !== word2ArrRev[i]) 
      break;
    // letters do match
    ending = word1ArrRev[i] + ending;
  }
  return ending;
}

const word1 = "skyscraper";
const word2 = "carnivore";

document.getElementById('ans').textContent = longestCommonEnding(word1, word2);