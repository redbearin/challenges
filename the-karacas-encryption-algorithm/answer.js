const encrypt = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const conv = {a: 0, e: 1, i: 2, o: 2, u: 3};
  let newStr = '';
  // go through str letter by letter in rev order
  for (let i = str.length - 1; i >= 0; i--) {
    // letter is a vowel
    if (vowels.includes(str[i])) {
      // encode
      newStr += conv[str[i]];
    }
    // letter is not a vowel
    else
      newStr += str[i];
  }
  // add the ending
  return newStr + "aca";
};


const str = "alpaca";
document.getElementById('ans').textContent = encrypt(str);
