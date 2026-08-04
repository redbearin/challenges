numberOfRepeats = str => {
  return str.length/new Set(str).size;
}

const str = "abab";

document.getElementById('ans').textContent = numberOfRepeats(str);