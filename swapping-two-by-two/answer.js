swapTwo = str => {
  newStr = '';
  for (let i = 0; i < str.length; i += 4) {
    if (str[i + 1] === undefined) {
      newStr += str[i];
      return newStr;
    }
    if (str[i + 2] === undefined) {
      newStr += str[i] + str[i + 1];
      return newStr;
    }
    if (str[i + 3] === undefined) {
      newStr += str[i] + str[i + 1] + str[i + 2];
      return newStr;
    }
    else {
      newStr += str[i+ 2] + str[i+3] + str[i] + str[i + 1];
    }
  }
  return newStr;
}

const str = "FFGGHHI";

document.getElementById('ans').textContent = swapTwo(str);