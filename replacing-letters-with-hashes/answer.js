replace = (str, range) => {
  let flag = false;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (flag) {
      if(str[i] === range[2]) {
        flag = false;
      }
      newStr += "#"
    }
    else if (!flag) {
      if(str[i] === range[0]) {
        newStr += "#";
        flag = true;
      }
      else {
        newStr += str[i];
      }
    }
  }
  return newStr;
}

const str = "abcdef";
const range = "c-e";

document.getElementById('ans').textContent = replace(str, range); 