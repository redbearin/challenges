possiblePalindrome = str => {
  let odds = 0;
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]]) {
      counts[str[i]] += 1;
    }
    else {
      counts[str[i]] = 1;
    }
  }
  for (key in counts) {
    if (counts[key] % 2) {
      odds++;
      if (odds > 1) {
        return false;
      }
    }
  }
  return true;
}

const str = "abacbb";

document.getElementById('ans').textContent = possiblePalindrome(str);