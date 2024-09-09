erase = str => {
  let count = 0;
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] === "#") {
      count++;
    }
    else {
      if (count) {
        count--;
        strArr[i] = '#';
      }
    }
  }
  return strArr.join('').replace(/#/g,'');
}

const str = "he##l#hel#llo";

document.getElementById('ans').textContent = erase(str);