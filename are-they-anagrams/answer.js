areAnagrams = (str1, str2) => {
  const clean1 = str1.toLowerCase().replaceAll(' ', '');
  const clean2 = str2.toLowerCase().replaceAll(' ', '');
  if (clean1.length !== clean2.length) {
    return false;
  }
  const counts = {};
  for (const char of clean1) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for (const char of clean2) {
    if (!counts[char]) {
      return false;
    }
    counts[char]--;
  }
  return true;
}

const str1 = "listen"; 
const str2 = "silent";

document.getElementById('ans').textContent = areAnagrams(str1, str2);