retrieve = sentence => {
  if(sentence === '')
    return JSON.stringify([]);
  const words = sentence.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const beginVowel = [];
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i][0].toLowerCase()))
      beginVowel.push(words[i].toLowerCase());
  }
  return JSON.stringify(beginVowel);
}


const sentence = "";

document.getElementById('ans').textContent = retrieve(sentence);