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
  if (newStr.length === 1)
    return false;
  return newStr;
}

const str = "   ";

document.getElementById('ans').textContent = generateHashtag(str);