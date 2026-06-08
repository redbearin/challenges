strMatchBy2char = (str1, str2) => {
  if (str1 === 0 || str2 === 0) {
    return 0;
  }
  let long, short;
  if (str2.length >= str1.length) {
    short = str1;
  }
  else {
    short = str2;
  }
  let count = 0;
  for (let i = 1; i < short.length; i++) {
    if (str1.slice(i-1, i+1) === str2.slice(i-1, i+1)) {
      count++;
    }
  }
  return count;
}

const str1 = "yytaazz";
const str2 = "yyjaaz";

document.getElementById('ans').textContent = strMatchBy2char(str1, str2);