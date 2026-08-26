verticalText = str => {
  const strArr = str.split(' ');
  let len = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > len) {
      len = strArr[i].length;
    }
  }
  let sub;
  let idx = 0;
  const vertText = [];
  while (idx < len) {
    let sub = [];
    for (let i = 0; i < strArr.length; i++) {
      idx > strArr[i].length - 1 ?
      sub.push(' ') :
      sub.push(strArr[i][idx]);
    }
    idx++;
    vertText.push(sub);
  }
  return JSON.stringify(vertText);
}

const str = "Holy bananas";

document.getElementById('ans').textContent = verticalText(str);