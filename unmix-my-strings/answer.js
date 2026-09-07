unmix = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1] === undefined) {
      newStr += str[i];
    }
    else {
      newStr += str[i + 1] + str[i];
    }
  }
  return newStr;
}

const str = 'badce';

document.getElementById('ans').textContent = unmix(str);