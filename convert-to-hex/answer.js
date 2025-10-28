toHex = str => {
  let hexStr = "";
  for (let i = 0; i< str.length; i++) {
    hexStr += str.charCodeAt(i).toString(16) + " ";
  }
  return hexStr.trim();
}

const str = "hello world";

document.getElementById('ans').textContent = toHex(str);