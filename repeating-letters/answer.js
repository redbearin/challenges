doubleChar = str => {
  return str.split('').map(s => s + s).join('');
}

const str = "String";

document.getElementById('ans').textContent = doubleChar(str);