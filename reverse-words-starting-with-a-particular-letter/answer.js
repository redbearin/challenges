specialReverse = (str, ltr) => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i][0] === ltr) {
      strArr[i] = strArr[i].split('').reverse().join('');
    }
  }
  return strArr.join(' ');
}

const str = "word searches are super fun";
const ltr = "s";

document.getElementById('ans').textContent = specialReverse(str, ltr);