lettersOnly = str => {
  if (!str)
    return false;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 32 || 
        str.charCodeAt(i) > 32 && 
        str.charCodeAt(i) < 97 || 
        str.charCodeAt(i) > 122) {
      return false;   
    }
  }
  return true;
}

const str = "";

document.getElementById('ans').textContent = lettersOnly(str);