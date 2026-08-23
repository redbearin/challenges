isAlphabeticallySorted = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 2) {
      for (let j = 1; j < strArr[i].length; j++) {
        if ( j === strArr[i].length - 1 && (strArr[i].charCodeAt(j) < 65 || 
            strArr[i].charCodeAt(j) > 90 && strArr[i].charCodeAt(j) < 97 || 
            strArr[i].charCodeAt(j) > 122)) {
          return true;     
        }
        else if (strArr[i].charCodeAt(j) >= strArr[i].charCodeAt(j-1) && 
            j === strArr[i].length - 1)
          return true;
        else if (strArr[i].charCodeAt(j) < strArr[i].charCodeAt(j-1)) 
          break;
      }
    }
  }
  return false;
};

const str = "She sells sea shells by the sea shore.";

document.getElementById('ans').textContent = isAlphabeticallySorted(str);