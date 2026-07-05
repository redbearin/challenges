xPronounce = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][0] === 'x') {
      if (strArr[i].length === 1) {
        strArr[i] = "ecks";
      }
      else {
        strArr[i] = "z" + strArr[i].slice(1);
      }
    }
    strArr[i] = strArr[i].replace(/x/g, 'cks');
  }
  return strArr.join(' ');
}

const str = "Inside the box was a xylophone";

document.getElementById('ans').textContent = xPronounce(str);