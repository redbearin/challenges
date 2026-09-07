firstPlace = str => {
  if (!str.length) {
    return "No road available";
  }
  const newStr = str.replace(/[^A-Za-z]/g, "");
  return newStr ?
  newStr[newStr.length - 1] :
  "No car available";
}

const str = "====b===O===e===U=A==";

document.getElementById('ans').textContent = firstPlace(str);