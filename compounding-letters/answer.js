accum = str => {
  let count = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase() + str[i].toLowerCase().repeat(count);
    if (i !== str.length - 1) {
      newStr += "-";
    }
    count++;
  }
  return newStr;
}

const str = "abcd";

document.getElementById('ans').textContent = accum(str);