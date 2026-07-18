secret = str => {
  const arr = str.split('*');
  let newStr = '';
  for (let i = 0; i < +arr[1]; i++) {
    newStr += "<" + arr[0] + ">" + "</" + arr[0] + ">"
  }
  return newStr;
}

const str = "div*2";

document.getElementById('ans').textContent = secret(str);