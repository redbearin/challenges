removeABC = str => {
  const newStr = str.replace(/[ABCabc]/g, "");
  return newStr.length === str.length ?
  null :
  newStr;
}

const str = "This might be a bit hard";

document.getElementById('ans').textContent = removeABC(str);