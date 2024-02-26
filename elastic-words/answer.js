const elasticize = word => {
  const leftLength = Math.ceil(word.length / 2);
  let newWordBeginning = '';
  // left side of word
  for (let i = 0; i < leftLength; i++) {
    // add number of letters that 
    // corresponds to position in word
    for (let j = 0; j < i + 1; j++) {
      newWordBeginning += word[i];
    }
  }
  let newWordEnd = '';
  let ltrGrouping;
  // right side of word
  for (let i = word.length - 1; i > leftLength - 1; i--) {
    ltrGrouping = '';
    // add number of letters that 
    // corresponds to position in word
    for (let j = 0; j < word.length - i; j++) {
      ltrGrouping += word[i];
    }
    // add that grouping to the ending of the word
    newWordEnd = ltrGrouping + newWordEnd;
  }
  // combine the new beginning and new ending
  return newWordBeginning + newWordEnd;
}

const word = "ANNA";

document.getElementById('ans').textContent = elasticize(word);