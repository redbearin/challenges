abbreviate = (str, n = 4) => {
  const strArr = str.split(' ');
  let abbr = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= n) {
      abbr += strArr[i][0].toUpperCase();
    }
  }
  return abbr;
}

document.getElementById('ans').textContent = abbreviate("do it yourself", 2);

