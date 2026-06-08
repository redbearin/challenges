isEven = str => {
  return (/^\d*[02468]$/.test(str));
}

const str = "2341";

document.getElementById('ans').textContent = isEven(str);