makeWordRiddle = str => {
  const strArr = str.toUpperCase().split('IN');
  return strArr[1][0] + strArr[0] + strArr[1].slice(1);
}

const str = "Finland";

document.getElementById('ans').textContent = makeWordRiddle(str);