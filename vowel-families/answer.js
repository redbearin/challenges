const sameVowelGroup = words => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let wordVowels, base;
  let matches = [];
  // word by word thru words array
  for (let i = 0; i < words.length; i++) {
    // vowels for the word
    wordVowels = [];
    // letter by letter thru each word
    for (let j = 0; j < words[i].length; j++) {
      // letter is a vowel
      if (vowels.includes(words[i][j])) 
        wordVowels.push(words[i][j]);
    }
    // first word
    if (i === 0)
      // set the base vowels (after removing duplicates)
      base = [... new Set(wordVowels)];
    // remove duplicates from arr of word vowels
    wordVowels = [... new Set(wordVowels)];
    // if the vowels for the word are the same as the base
    // it is a match
    if (JSON.stringify(wordVowels) === JSON.stringify(base))
      matches.push(words[i]);
  }
  return JSON.stringify(matches);
};

const words = ["hoops", "chuff", "bot", "bottom"];

document.getElementById("ans").textContent = sameVowelGroup(words);