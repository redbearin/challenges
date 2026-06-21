reverseOdd = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length % 2) {
      strArr[i] = strArr[i].split('').reverse().join('');
    }
  }
  return strArr.join(' ');
}
const str = "One two three four";

document.getElementById('ans').textContent = reverseOdd(str);