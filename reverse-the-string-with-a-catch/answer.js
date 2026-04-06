specialReverseString = str => {
  let strRev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ')
      strRev += str[i].toLowerCase();
  }
  let finStr = '';
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ')
      finStr += ' ';
    else {
      if (str.charCodeAt(i) > 64 &&
          str.charCodeAt(i) < 91) 
        finStr += strRev[count].toUpperCase();
      else
        finStr += strRev[count];
      count++;
    }
  }
  return finStr;
}

const str = "Where's your dog Daisy?";

document.getElementById('ans').textContent = specialReverseString(str);