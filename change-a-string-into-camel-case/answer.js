camelCasing = str => {
  const strArr = str.toLowerCase().split(/[_ ]/);
  let newStr = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    newStr += strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return newStr;
}

const str = "low high_HIGH";

document.getElementById('ans').textContent = camelCasing(str);