spaceMessage = str => {
  let num;
  let inside = '';
  let newStr = '';
  let i = 0;
  while (i < str.length) {
    if (str[i] === '[') {
      i++;
      num = str[i];
      i++;
      while (str[i] !== ']') {
        inside += str[i];
        i++;
      }
      i++;
      newStr += inside.repeat(num);
      inside = '';
    }
    else {
      newStr += str[i];
      i++;
    }
  }
  return newStr;
}

const str = 'AB[3CD]';

document.getElementById('ans').textContent = spaceMessage(str);