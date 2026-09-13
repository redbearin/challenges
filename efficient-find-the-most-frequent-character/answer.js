mostFrequent = str => {
  if (!str.length) return null;
  const counts = {};
  let maxChar = '';
  let maxCount = 0;

  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxChar = char;
    }
  }
  return maxChar; 
}

const str = "11222!!";

document.getElementById('ans').textContent = mostFrequent(str);