getCase = str => {
  str = str.replace(/[^a-zA-Z]/g, "");
  const strCopy = str;
  const strCopy2 = str;
  if (str.toUpperCase() === strCopy) {
    return "upper";
  }
  if (str.toLowerCase() === strCopy2) {
    return "lower";
  }
  return "mixed";
} 

const str = "Indoor Voice";

document.getElementById('ans').textContent = getCase(str);