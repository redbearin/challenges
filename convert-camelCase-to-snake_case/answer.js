camelToSnake = str => {
  const strArr = str.split(' ');
  let word;
  for (let i = 0; i < strArr.length; i++) {
    word = "";
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i].charCodeAt(j) > 64 && 
          strArr[i].charCodeAt(j) < 91) {
        word += '_' + strArr[i][j].toLowerCase();
      }
      else {
        word += strArr[i][j];
      }
    }
    strArr[i] = word;
  }
  return strArr.join(' ');
}

const str = "greatApples for aSmellyRhino";

document.getElementById('ans').textContent = camelToSnake(str);