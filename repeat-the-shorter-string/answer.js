lengthen = (str1, str2) => {
  let long, short;
  if (str1.length > str2.length) {
    long = str1;
    short = str2;
  }
  else {
    long = str1;
    short = str2;
  }
  let count = 0;
  let str = '';
  while (count <= long.length) {
    for (let i = 0; i < short.length; i++) {
      count++;
      if (count > long.length) {
        break;
      }
      str += short[i];
    }
  }
  return str;
}

const str1 = "abcdefg";
const str2 = "ab";

document.getElementById('ans').textContent = lengthen(str1, str2);