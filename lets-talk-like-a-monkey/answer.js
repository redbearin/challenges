monkeyTalk = str => {
  const strArr = str.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let monkeyWords = [];
  // go word by word
  for (let i = 0; i < strArr.length; i++) {
    // first letter is a vowel
    if (vowels.includes(strArr[i][0])) {
      // in the first word
      if (i === 0)
        monkeyWords.push('Eek')
      // not in first word
      else
        monkeyWords.push('eek')
    }  
    // first letter is a consonant
    else {
      // in the first word
      if (i === 0)
      monkeyWords.push('Ook')
      // not in the first word
      else
      monkeyWords.push('ook')
    }
  }
  return monkeyWords.join(' ') + '.';
}
const str = "Mubashir Hassan";

document.getElementById('ans').textContent = monkeyTalk(str);