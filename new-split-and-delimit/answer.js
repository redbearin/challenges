splitAndDelimit = (str, n, delimiter) => {
  let newStr = '';
  let subStr; 
  for (let i = 0; i < str.length; i += n) {
    subStr = '';
    for (let j = i; j < n + i; j++) {
      if (str[j] === undefined)
        break;
      subStr += str[j];
    }
    if (i + n >= str.length)
      newStr += subStr;
    else
      newStr += subStr + delimiter;
  }
  return newStr;
}

const str = "poisonous";
const n = 2;
const delimiter = "~";

document.getElementById('ans').textContent = splitAndDelimit(str, n, delimiter);