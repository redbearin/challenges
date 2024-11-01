reverse = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4) {
      strArr[i] = strArr[i].split('').reverse().join('');
    }
  }
  return strArr.join(' ');
}

const str = "This is a typical sentence.";

document.getElementById('ans').textContent = reverse(str);