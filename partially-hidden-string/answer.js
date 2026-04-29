partiallyHide = str => {
  const strArr = str.split(' ');
  let word;
  for (let i = 0; i < strArr.length; i++) {
    word = '';
    for (let j = 0; j < strArr[i].length; j++) {
      if (j === 0 || 
          j === strArr[i].length - 1) {
        word += strArr[i][j];
      }
      else {
        word += '-';
      }
    }
    strArr[i] = word;
  }
  return strArr.join(' ');
}

const str = "skies were pretty";

document.getElementById('ans').textContent = partiallyHide(str);