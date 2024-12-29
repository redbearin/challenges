getDecimalPlaces = str => {
  return str.includes('.') ?
  str.split('.')[1].length:
  0;
}

const str = "43.20";

document.getElementById('ans').textContent = getDecimalPlaces(str);