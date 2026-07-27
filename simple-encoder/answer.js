simpleEncoder = str => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i - 1] || str[i] === str[i + 1] ?
    newStr += "]" :
    newStr += "[";
  }
  return newStr;
}

const str = "eD  aBiT";

document.getElementById('ans').textContent = simpleEncoder(str);