insertWhitespace = str => {
  // initialize white space string
  let whiteSpaceStr = str[0];
  // go element by element thru
  // rest of array
  for (let i = 1; i < str.length; i++) {
    //capital letter
    if (str.charCodeAt(i) > 64 && 
        str.charCodeAt(i) < 91)
      // add a white space before
      whiteSpaceStr += ' ';
    // add character to white space string
    whiteSpaceStr += str[i];     
  }
  return whiteSpaceStr;
}

const str = "TheGreatestUpsetInHistory";

document.getElementById('ans').textContent = insertWhitespace(str);