afterPotion = str => {
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] === 'A' || strArr[i] === 'B') {
      strArr[i] === 'A' ?
        strArr[i - 1] = +strArr[i - 1] + 1 + "" :
        strArr[i - 1] = +strArr[i - 1] - 1 + "";
      strArr.splice(i, 1);
    }
  }
  return strArr.join('');
}

const str = "3A78B51";

document.getElementById('ans').textContent = afterPotion(str);