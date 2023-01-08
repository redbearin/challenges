alphanumericRestriction = str => {
  // empty string
  if (str === '')
    return false;
  let alpha = false;
  let num = false;
  // go ele by ele thru str
  for (let i = 0; i < str.length; i++) {
    // already found a letter
    if (alpha === true) {
      // not a letter
      if (!/[A-Za-z]/.test(str[i]))
        return false;
    }
    // already found a number
    else if (num === true) {
      // not a number
      if (!/[1-9]/.test(str[i]))
        return false;
    }
    // is a letter
    else if (/[A-Za-z]/.test(str[i])) 
      alpha = true;
    // is a numbers
    else if (/[1-9]/.test(str[i])) 
      num = true;
    // is something else
    else
      return false;   
  }
  return true;
}

const str = " ";
document.getElementById('ans').textContent = alphanumericRestriction(str);