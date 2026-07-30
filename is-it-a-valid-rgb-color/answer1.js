validColor = str => {
  // break out rgb or rgba from rest of string
  const strArr = str.split('(');
  // one of allowable formats
  if (strArr[0] === 'rgba' || strArr[0] === 'rgb') {
    const insideParen = strArr[1].split(',');
    if (strArr[0] === 'rgb') {
      // not three components
      if (insideParen.length !== 3)
        return false;
      let percentFlag = false;
      // in perecentages
      if (/%/.test(strArr[1])) {
        for (let i = 0; i < insideParen.length; i++) {
          insideParen[i] = parseFloat(insideParen[i]) / 100 * 255;
          percentFlag = true;
        }
      }
      // numbers (remove the last paren)
      else {
        insideParen[insideParen.length - 1] = insideParen[insideParen.length - 1].slice(0,-1);
      }
      // check to make sure every element meets rgb criteria
      for (let i = 0; i < insideParen.length; i++) {
        // remove extra white space (if not a percent and already numeric)
        if (percentFlag === false) {
          insideParen[i] = insideParen[i].trim();
        }
        // does not meet rgb criteria
        if (insideParen[i] === '' || 
            +insideParen[i] < 0 || 
            +insideParen[i] > 255)
          return false;
      }
    }
    // rgba
    else {
      // no 4 components
      if (insideParen.length !== 4)
        return false;
      // remove extra paren
      insideParen[insideParen.length - 1] = insideParen[insideParen.length - 1].slice(0,-1);
      // remove extra spaces
      for (let i = 0; i < insideParen.length; i++) {
        // remove extra white space
        insideParen[i] = insideParen[i].trim();
        // last element
        if (i === insideParen.length - 1) {
          // does not meet last element criteria
          if (insideParen[i] === '' || 
              +insideParen[i] < 0 || 
              +insideParen[i] > 1)
            return false;
        }
        // not last element
        // does not meet criteria for other elements
        else if (insideParen[i] === '' || 
                 +insideParen[i] < 0 || 
                 +insideParen[i] > 255)
          return false;
      }
    }
  }
  // not one of allowable formats
  else 
    return false;
  return true;
}
const str = "rgb(0%,50%,100%)";

document.getElementById('ans').textContent = validColor(str);