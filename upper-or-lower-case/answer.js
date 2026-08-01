stepsToConvert = str => {
  let capCt = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      capCt++;
    }
  }
  if (str.length - capCt > capCt) {
    return capCt;
  }
  return str.length - capCt;
}

const str = "abCBA";

document.getElementById('ans').textContent = stepsToConvert(str);