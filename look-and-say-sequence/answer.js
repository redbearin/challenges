lookAndSay = str => {
  let count = 1;
  let newStr = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;

    }
    else {
      newStr += count + str[i - 1];
      count = 1;
    }
    if (i === str.length - 1) {
      newStr += count + str[i];
    }
  }
  return newStr;
}

const str = "31131211131221";

document.getElementById('ans').textContent = lookAndSay(str);