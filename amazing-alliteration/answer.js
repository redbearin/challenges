const alliterationCorrect = sent => {
  // take of ending punctuation
  // convert everything to lowercase
  sent = sent.slice (0, -1).toLowerCase();
  // filter out all words with length < 4
  const arrLongWords = sent.split(' ').filter(element => element.length > 3);
  // compare all words to first that meets length criteria
  // if first letter not the same return false
  for (let i = 1; i < arrLongWords.length; i++) {
    if (arrLongWords[i][0] !== arrLongWords[0][0])
      return false;
  }
  // all beginning letters of words with 
  // length > 4 the same
  return true;
};

const sent = "Maybel manages money well."; 

document.getElementById('ans').textContent = alliterationCorrect(sent);