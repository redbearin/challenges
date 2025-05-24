absolute = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'A') {
      strArr[i] = "An absolute"
    }
    if (strArr[i] === 'a') {
      strArr[i] = "an absolute"
    }
  }
  return strArr.join(' ');
}

const str = "I am a champion!!!";

document.getElementById('ans').textContent = absolute(str);