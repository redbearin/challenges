stringCode = str => {
  // split string into array of words
  const strArr = str.split(' ');
  // intialize consonant and vowel counts (for a word)
  let consCt= 0;
  let vowelCt = 0;
  // initial word counts of vowels and consonants
  const countsVowels = [];
  const countsCons = [];
  // array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // word by word thru the array
  for (let i = 0; i < strArr.length; i++) {
    // letter by letter thru word
    for (let j = 0; j < strArr[i].length; j++) {
      // letter is a vowel
      if (vowels.includes(strArr[i][j])) 
        vowelCt++;
      // letter is a consonant
      else if (strArr[i].charCodeAt(j) > 66 && strArr[i].charCodeAt(j) < 91 ||
               strArr[i].charCodeAt(j) > 96 && strArr[i].charCodeAt(j) < 123
      ) 
      consCt++;
    }
    // add vowel count for word to countsVowels array/
    countsVowels.push(vowelCt);
    // reinitialze vowel counts for word
    vowelCt = 0;
    // add vowel count for word to countsCons array
    countsCons.push(consCt);
    // reinitialze cons count for word
    consCt = 0;
  }
  return JSON.stringify([countsCons.join(' '), countsVowels.join(' ')]);
}

const str = "The first man to walk on the moon was Neil Armstrong.";

document.getElementById('ans').textContent = stringCode(str);