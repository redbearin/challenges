licensePlate = (str, len) => {
  str = str.replace(/-/g, "");
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= len) {
    for (let j = i; j > i - len; j--) {
      if(j < 0) {
        break;
      }
      newStr = str[j] + newStr;
    }
    newStr = '-' + newStr;
  }
  newStr = newStr.toUpperCase();
  if (newStr[0] === '-') {
    return newStr.slice(1);
  }
  return newStr;
}

const str = "2-5g-3-J";
const len = 2;

document.getElementById('ans').textContent = licensePlate(str, len);