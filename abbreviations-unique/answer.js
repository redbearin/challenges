uniqueAbbrev = (abbrev, words) => {
  let count, regex;
  // go abbreviation by abbreviation
  for (let i = 0; i < abbrev.length; i++) {
    count = 0;
    // build regular expression to match 
    // abbrev with chars at beginning of word
    regex = new RegExp ('\\b' + abbrev[i]);
    // test to see if the chars at the
    // beginning of word match
    for (let j = 0; j < words.length; j++) {
      if (regex.test(words[j])) 
        count++;
      // more than one match, not unique
      if (count > 1) 
        return false;
    }
  }
  // only match for each abbrev.
  return true;
}

const abbrev = ["mo", "ma", "me"]; 
const words = ["moment", "many", "mean"];

document.getElementById('ans').textContent = uniqueAbbrev(abbrev, words);