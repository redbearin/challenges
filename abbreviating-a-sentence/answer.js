abbreviate = (str, n = 4) => {
  const strArr = str.split(' ');
  let abbrev = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= n)
      abbrev += strArr[i][0].toUpperCase();
  }
  return abbrev;
}
const str = "attention AND deficit OR hyperactivity THE disorder";

document.getElementById('ans').textContent = abbreviate(str);