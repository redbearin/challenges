spoonerise = phrase => {
  // break into words
  const strArr = phrase.split(' ');
  // define vowels
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

  // consonants at beginning of words
  let consFirst = '';
  let consSec = '';
  //  locations to slice words
  let sliceLocFirst = 0;
  let sliceLocSec = 0;

  // build consonants at beginning first word
  for (let i = 0; i < strArr[0].length; i++) {
    if (vowels.includes(strArr[0][i]))
      break;
    consFirst += strArr[0][i];
    sliceLocFirst++;
  }
  // build consonates at beginning of second word
  for (let i = 0; i < strArr[1].length; i++) {
    if (vowels.includes(strArr[1][i]))
      break;
    consSec += strArr[1][i];
    sliceLocSec++;
  }

  return consSec + strArr[0].slice(sliceLocFirst) + ' ' + consFirst + strArr[1].slice(sliceLocSec);
}

const phrase = "history lecture";

document.getElementById('ans').textContent = spoonerise(phrase);