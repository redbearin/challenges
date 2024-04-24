censor = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4) {
      strArr[i] = '*'.repeat(strArr[i].length);
    }
  }
  return strArr.join(' ');
}

const str = "The code is fourty";

document.getElementById('ans').textContent = censor(str);