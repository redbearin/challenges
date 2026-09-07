const sameVowelGroup = w => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // set base
  let base;
  const baseArr = [];
  for (let i = 0; i < w[0].length; i++) {  
    if (vowels.includes(w[0][i])) 
        baseArr.push(w[0][i]);
    base = [... new Set(baseArr)].sort().join('');
  }

  let matches = [w[0]];

  // check for matches
  let wordVowels;
  for (let i = 1; i < w.length; i++) {
    // vowels in word
    wordVowelsArr = [];
    for (let j = 0; j < w[i].length; j++) {
      // letter a vowel
      if (vowels.includes(w[i][j])) 
        wordVowelsArr.push(w[i][j]);
    }
    wordVowels = [... new Set(wordVowelsArr)].sort().join('');
    if (wordVowels === base)
      matches.push(w[i]);
  }
  return JSON.stringify(matches);
};

const w = ["toe", "ocelot", "maniac"];

document.getElementById("ans").textContent = sameVowelGroup(w);