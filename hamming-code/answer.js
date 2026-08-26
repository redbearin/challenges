hammingCode = str => {
  let conv, newStr;
  let code = "";
  for (let i = 0; i < str.length; i++) {
    newStr = "";
    conv =  str.charCodeAt(i).toString(2).padStart(8, '0');
    for (let j = 0; j < conv.length; j++) {
      newStr += conv[j].repeat(3);
    }
    code += newStr;
  }
  return code;
}

const str = "hey";

document.getElementById('ans').textContent = hammingCode("hey");