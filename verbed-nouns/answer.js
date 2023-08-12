verbify = str => {
  const strArr = str.split(' ');
  if (strArr[0][strArr[0].length - 1] === 'd' &&
      strArr[0][strArr[0].length - 2] === 'e')
    return str;
  if (strArr[0][strArr[0].length - 1] === 'e')
    return strArr[0] + 'd ' + strArr[1];
  else
  return strArr[0] + 'ed ' + strArr[1];
}
const str = "shredded cheese";

document.getElementById('ans').textContent = verbify(str);