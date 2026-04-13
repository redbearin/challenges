capLast = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].slice(0, -1) + strArr[i].slice(-1).toUpperCase();
  }
  return strArr.join(' ');
}

const str = "My Name Is Edabit";

document.getElementById('ans').textContent = capLast(str);