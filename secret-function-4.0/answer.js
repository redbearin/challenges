secret = str => {
  const strArr = str.split('.');
  if (strArr.length === 2) {
    return `<${strArr[0]} class="${strArr[1]}"></${strArr[0]}>`
  }
  let text = `<${strArr[0]} class="${strArr[1]}`;
  for (let i = 2; i < strArr.length; i++) {
    if (i === strArr.length - 1) {
      text += ` ${strArr[strArr.length - 1]}"></${strArr[0]}>`;
    }
    else {
      text += ` ${strArr[i]}`;
    }
  }
  return text;
}

const str = "p.one.two.three";

document.getElementById('ans').textContent = secret(str);