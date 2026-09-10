firstUnique = str => {
  const counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1; 
  }
  for (key in counts) {
    if (counts[key] === 1) {
      return key;
    }
  }
  return null;
}

const str = "aabbbccad";

document.getElementById('ans').textContent = firstUnique(str);