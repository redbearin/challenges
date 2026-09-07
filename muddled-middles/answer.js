mixMiddle = str => {
  const strArr = str.split(' ');
  let modStr;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 3) {
      modStr = strArr[i][0];
      for (let j = strArr[i].length - 2; j >= 1; j--) {
        modStr += strArr[i][j];
      }
      modStr += strArr[i][strArr[i].length - 1];
      strArr[i] = modStr;
    }
  }
  return JSON.stringify(strArr.join(' '));
}

const str = "buying a first-class ticket";

document.getElementById('ans').textContent = mixMiddle(str);