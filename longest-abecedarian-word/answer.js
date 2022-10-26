const longestAbecedarian = words => {
  // initialize flag for letters of word all increasing
  let ltrsAllIncreasing = true;
  let longestAbec = '';
  // go word by word through array
  for (let i = 0; i < words.length; i++) {
    // go letter by letter through word
    for (let j = 1; j < words[i].length; j++) {
      // letters are not increasing
      if (words[i].charCodeAt(j) < words[i].charCodeAt(j - 1)) {
        ltrsAllIncreasing = false;
        break;
      }
    }
    // letters of word are increasing
    if (ltrsAllIncreasing) 
      if (words[i].length > longestAbec.length)
        longestAbec = words[i];
    // letters of word are not increasing
    // reset flag
    else
      ltrsAllIncreasing = true;
  }
  return longestAbec;
};

const words = ["one", "two", "three"];

document.getElementById('ans').textContent = longestAbecedarian(words);