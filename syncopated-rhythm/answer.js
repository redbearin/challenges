hasSyncopation = str => {
  for (let i = 1; i < str.length; i += 2) {
    if (str[i] === '#') {
      return true;
    }
  }
  return false;
}

const str = "#.#.###.";

document.getElementById('ans').textContent = hasSyncopation(str);