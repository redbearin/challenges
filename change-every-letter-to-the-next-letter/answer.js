move = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return newStr;
}

const str = "hello"

document.getElementById('ans').textContent = move(str);