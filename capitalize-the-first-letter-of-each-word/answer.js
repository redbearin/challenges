makeTitle = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
}

const str = "This is a title";

document.getElementById('ans').textContent = makeTitle(str);