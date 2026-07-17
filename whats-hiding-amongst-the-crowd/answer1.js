detectWord = str => {
  return str.replace(/[A-Z]/g,'');
}

const str = "UcUNFYGaFYFYGtNUH";

document.getElementById('ans').textContent = detectWord(str);