licensePlate = (str, len) => {
  str = str.replace(/-/g, "");
  console.log(str)
  let newStr = '';
  for (let i = 0; i < str.length; i += len) {
    for (let j = i; j < i + len; j++) {
      if(j > str.length - 1) {
        break;
      }
      newStr += str[j];
    }
    newStr += '-';
  }
  newStr = newStr.toUpperCase();
  if (newStr[newStr.length  - 1] === '-') {
    return newStr.slice(0,-1);
  }
  return newStr;
}

const str = "2-5g-3-J";
const len = 2;

document.getElementById('ans').textContent = licensePlate(str, len);