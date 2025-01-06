isTrue = str => {
  const strArr = str.split(/[=><]/);
  if (str.includes('=')) {
    return strArr[0] === strArr[1];
  }
  if (str.includes('<')) {
    return +strArr[0] < +strArr[1];
  }
  if (str.includes('>')) {
    return +strArr[0] > +strArr[1];
  }
}

const str = "15>13";

document.getElementById('ans').textContent = isTrue(str);