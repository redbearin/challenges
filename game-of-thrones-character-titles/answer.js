correctTitle = str => {
  const strArr = str.split(' ');
  const specialWords = ['and', 'the', 'of', 'in'];
  let wordLowerCase;
  for (let i = 0; i < strArr.length; i++) {
    wordLowerCase = strArr[i].toLowerCase();
    // special word
    if (specialWords.includes(wordLowerCase))
     strArr[i] = wordLowerCase;
    // hypenated word
    else if(/-/.test(wordLowerCase)) {
      let hyphenArr = wordLowerCase.split('-');
      let hyphenWordPart;
      for (let j = 0; j < hyphenArr.length; j++) {
        hyphenWordPart = hyphenArr[j];
        // special word
        if (specialWords.includes(hyphenWordPart))
          continue;
        // regular word
        hyphenArr[j] = hyphenWordPart[0].toUpperCase() + hyphenWordPart.slice(1);
      }
      // recombine to make hyphenated str
      strArr[i] = hyphenArr.join('-');
    }
    // regular word
    else
      strArr[i] = wordLowerCase[0].toUpperCase() + wordLowerCase.slice(1);
  }
  return strArr.join(' ');
}

const str = "sansa stark, lady of winterfell.";

document.getElementById('ans').textContent = correctTitle(str);