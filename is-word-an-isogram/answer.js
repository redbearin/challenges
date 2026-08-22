isIsogram = str => {
  str = str.toLowerCase();
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]]) {
      return false;
    }
    counts[str[i]] = 1;
  }
  return true;
}

const str = "Algorism";

document.getElementById('ans').textContent = isIsogram(str);