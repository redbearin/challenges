generateHashtag = str => {
  if (str === '')
    return false;
  let newStr = '#';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (str[i - 1] === ' ')
        newStr += str[i].toUpperCase();
      else 
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "    Hello     World   ";

document.getElementById('ans').textContent = generateHashtag(str);