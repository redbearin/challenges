changeString = str => {
  const revStr = str.split("").reverse().join("");
  let newStr = '';
  for (let i = 0; i < revStr.length; i++) {
    if (revStr.charCodeAt(i) > 64 &&
        revStr.charCodeAt(i) < 91) {
      revStr.charCodeAt(i) === 90 ?
        newStr += 'A' :
        newStr += String.fromCharCode(revStr.charCodeAt(i) + 1);
    }
    else {
      newStr += revStr[i].toUpperCase();
    }
  }
  return newStr;
}

const str = "ApPle";

document.getElementById('ans').textContent = changeString(str);