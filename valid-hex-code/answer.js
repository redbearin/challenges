isValidHexCode = str => {
  if (str[0] !== '#' || str.length !== 7) {
    return false;
  }
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || 
        str.charCodeAt(i) > 57 && str.charCodeAt(i) < 65 || 
        str.charCodeAt(i) > 70 && str.charCodeAt(i) < 97 || 
        str.charCodeAt(i) > 102) {
      return false;
    }
  }
  return true;
}

const str = "#CD5C5C";

document.getElementById('ans').textContent = isValidHexCode(str);