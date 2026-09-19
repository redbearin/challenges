const firstUniqueChar = str => {
  const countsMap = new Map();
  for (const char of str) {
    countsMap.set(char, (countsMap.get(char) || 0) + 1);
  }
  for (const [key, value] of countsMap) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}

const str = "24422988a33";

document.getElementById('ans').textContent = firstUniqueChar(str);