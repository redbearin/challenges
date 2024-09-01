replace = (str, range) => {
  const beg = range.charCodeAt(0);
  const end = range.charCodeAt(2);
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i) >= beg && 
    str.charCodeAt(i) <= end ?
    newStr += '#':
    newStr += str[i];
  }
  return newStr;
}

const str = "abcdef";
const rep = "c-e";

document.getElementById('ans').textContent = replace(str, rep); 
