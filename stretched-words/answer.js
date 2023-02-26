unstretch = str => {
  let newStr = '';
  // only add ltrs that are not repeated 
  // to new string
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i-1])
      newStr += str[i];
  }
  return newStr;
}

const str = "cccccaaarrrbbonnnnn";

document.getElementById('ans').textContent = unstretch(str);