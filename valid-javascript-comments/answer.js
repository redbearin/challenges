commentsCorrect = str => {
  // combos  /*
  if (str.includes('*')) {
    if (str.includes('**')) {
      let i = 0;
      while (i < str.length) {
        // check for /**/ combo
        if (str[i] === '/' && str[i+1] === '*') {
          if (str[i+2] != '*') {
            return false;
          }
          if (str[i+3] != '/')  {
            return false;
          }
          i += 4;
        }
        // check for // combo
        else if (str[i] === '/' && str[i+1] === '/') {
          i += 2;
        }
        // neither
        else {
          return false;  
        }
      }
      // all combos check
      return true;
    }
  }
  // only /
  else {
    // odd number characters
    if (str.length % 2) {
      return false;
    }
    // even num characters
    else  {
      // not all /
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== 47)
          return false;
      }
      // all /
      return true;
    }
  }
}

const str = "///*/**/";

document.getElementById('ans').textContent = commentsCorrect(str);