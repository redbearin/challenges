reverseTitle = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].slice(0,1).toLowerCase() + strArr[i].slice(1).toUpperCase();
  }
  return strArr.join(' ');
}

const str = "this is a title";

document.getElementById('ans').textContent = reverseTitle(str);