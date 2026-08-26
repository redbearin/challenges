retrieve = str => {
  if(str === '') {
    return JSON.stringify([]);
  }
  const words = str.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const beginVowel = [];
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i][0].toLowerCase())) {
      if (/[A-Za-z]/.test(words[i][words[i].length - 1])) {
        beginVowel.push(words[i].toLowerCase());

      }
      else {
        console.log(words[i].slice(0, -1).toLowerCase())
        beginVowel.push(words[i].slice(0, -1).toLowerCase());
      }
    }
  }
  return JSON.stringify(beginVowel);
}


const sentence = "";

document.getElementById('ans').textContent = retrieve(sentence);
