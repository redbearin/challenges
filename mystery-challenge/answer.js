mysteryFunc = num => {
  const strNum = num.toString();
  let newStr = "";
  for (let i = 0; i < strNum.length; i++) {
    newStr += "1" + strNum[i];
  }
  return newStr;
}

const num = 521;

document.getElementById('ans').textContent = mysteryFunc(num);