const mirrorCipher = (str, key) => {
  // default key (no key provided)
  if (!key) {
    key = 'abcdefghijklmnopqrstuvwxyz';
  }
  // intialize the new string
  let newStr = '';
  // go letter by letter through str
  for(let i = 0; i < str.length; i++) {
    // key includes lowercase letter
    if (key.includes(str[i].toLowerCase())) {
      // letter in first half of key
      if (key.indexOf(str[i].toLowerCase()) < key.length/2) 
        newStr += key[key.length - key.indexOf(str[i].toLowerCase()) -1 ];
      // letter in second half of key
      else 
        newStr += key[key.length - key.indexOf(str[i].toLowerCase()) -1];
    }
    // letter is not in the key
    else
      newStr += str[i].toLowerCase();
  }
  return newStr;
};

document.getElementById('ans').textContent = mirrorCipher("Matt MacPherson");