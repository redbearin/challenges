textToNumberBinary = str => {
  const strArr = str.split(' ');
  let strNum;
  let newStr = '';
  for (let i = 0; i < strArr.length; i++) {
    strNum = strArr[i].toLowerCase();
    if (strNum === 'zero') {
      newStr += "0";
    }
    if (strNum === 'one') {
      newStr += '1';
    }
  }
  return newStr.slice(0, Math.floor( newStr.length / 8) * 8);
}

const str = "zero one zero one zero one zero one one two";

document.getElementById('ans').textContent = textToNumberBinary(str);