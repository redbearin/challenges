verbify = str => {
  const arrStr = str.split(' ');
  if (arrStr[0].slice(-2) === 'ed') {
    return str;
  }
  return arrStr[0].slice(-1) === 'e' ?
  arrStr[0] + 'd ' + arrStr[1] :
  arrStr[0] + 'ed ' + arrStr[1];
}

const str = "cheese burger";

document.getElementById('ans').textContent = verbify(str);